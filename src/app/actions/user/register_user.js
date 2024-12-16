"use server";

import config from "@/services/config/config";
import {createAdminClient, createSessionClient} from "@/services/appwrite/appwrite";
import {ID} from "node-appwrite"
import {cookies} from "next/headers";
import {getLoggedInUser} from "@/app/actions/user/get_user_session";
import {checkIsUsernameAvailable} from "@/app/actions/user/check_user_name";
import {checkIsHandleAvailable} from "@/app/actions/user/check_user_handle";
import {validateForm} from "@/utils/form_validation";
import {validateSecurityStatus} from "@/utils/security_validation";
import {detectUserLocation} from "@/app/actions/geo/geo";

export async function registerUserWithEmailAndPassword(formData) {
    try {
        // validate the form
        const validationResult = await validateForm(formData);
        if (validationResult.error) {
            return {
                success: false,
                error: validationResult.error
            };
        }

        // Extract form fields
        const email = formData.get("email");
        const password = formData.get("password");
        const name = formData.get("name");
        const username = formData.get("username");
        const handle = formData.get("handle");

        // Check if user is already logged in
        const existingUser = await getLoggedInUser();
        if (existingUser) {
            return {
                success: false,
                error: 'User is already logged in'
            };
        }

        // Get location and validate availability concurrently
        const [locationData, isUsernameAvailable, isHandleAvailable] = await Promise.all([
            detectUserLocation(),
            checkIsUsernameAvailable(username),
            checkIsHandleAvailable(handle)
        ]);

        // Security validation
        if (locationData?.ipRegistry?.security) {
            const securityValidation = validateSecurityStatus(locationData.ipRegistry.security);
            if (!securityValidation.allowed) {
                return {
                    success: false,
                    error: securityValidation.reason
                };
            }
        }

        // Username and handle availability checks
        if (!isUsernameAvailable) {
            return {
                success: false,
                error: 'Username is already taken'
            };
        }

        if (!isHandleAvailable) {
            return {
                success: false,
                error: 'Handle is already taken'
            };
        }

        // Create admin client
        const {account, databases} = await createAdminClient();

        const userId = ID.unique()

        // Create user account
        const newUser = await account.create(
            userId,
            email,
            password,
            name
        );

        // Add the username and handle to global db
        const globalProfileDocument = await databases.createDocument(
            config.databases.global_profiles_index.id,
            config.databases.global_profiles_index.collections.profiles_index,
            userId,
            {
                username: username,
                handle: handle,
            }
        );

        // Set user profile data
        const userProfileData = await databases.createDocument(
            config.databases.user_profiles_data.id,
            config.databases.user_profiles_data.collections.user_profile,
            userId,
            {
                name: name,
                username: username,
                handle: handle,
                avatar_url: null,
                cover_url: null,
                bio: null,
                twitter_url: null,
                facebook_url: null,
                instagram_url: null,
                youtube_url: null,
            }
        )

        // Create a session manually
        const session = await account.createEmailPasswordSession(email, password);

        // Set cookies
        const cookieStore = cookies();
        await cookieStore.set("session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        // Create session client to update preferences
        const sessionClient = await createSessionClient();
        const userPreferences = await sessionClient.account.updatePrefs({
            // Theme
            theme: 'light',
            language: 'en',

            // Profile
            type: 'user',

            // Notifications
            notifications_email: true,
            notifications_push: true,
            notifications_sms: false,

            // Privacy
            privacy_profile_visibility: 'public',
            privacy_activity_tracking: true,
            privacy_data_sharing: false,

            // Accessibility
            accessibility_high_contrast: false,
            accessibility_font_size: 'medium',
            accessibility_screen_reader_support: false,

            // Communication
            communication_marketing_emails: false,
            communication_product_updates: true,
            communication_community_newsletters: false,

            // Content
            content_default_feed_type: 'recommended',
            content_adult_content_filter: 'moderate',

            // Misc
            onboarding_completed: false,
            last_updated: new Date().toISOString()
        });

        // return success and user
        return {
            success: true,
            user: newUser,
            profile: globalProfileDocument,
            preferences: userPreferences,
            locationData: locationData,
            session: session
        }

    } catch (error) {
        console.error("There was an error registering user with email and password", error);
        // return the error
        return {
            success: false,
            error: `There was an error registering user with email and password: ${error.message}`,
        }
    }
}