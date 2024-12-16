"use server";

import config from "@/services/config/config";
import {getLoggedInUser} from "@/app/actions/user/get_user_session";
import {createAdminClient} from "@/services/appwrite/appwrite";
import {Query} from "node-appwrite";

export async function getUserProfile() {
    try {
        // Get the logged-in user
        const user = await getLoggedInUser();

        if (!user) return;
        const userId = user.$id;

        // Initialize Appwrite admin client
        const client = await createAdminClient();

        // Fetch user's profile documents with ID filter
        const userProfile = await client.databases.listDocuments(
            config.databases.user_profiles_data.id,
            config.databases.user_profiles_data.collections.user_profile,
            [
                Query.equal('$id', userId)
            ]
        )

        return {
            user: {
                id: userId,
                ...userProfile
            },
            userProfile: userProfile.documents[0],

            success: true
        };

    } catch (error) {
        console.error('Error fetching user profile:', error);
        return {
            success: false,
            error: error.message,
        };
    }
}