"use server";

import {createAdminClient} from "@/services/appwrite/appwrite";
import {cookies} from "next/headers";

export async function loginWithEmailAndPassword(formData) {
    try {
        // Extract form fields
        const email = formData.get("email");
        const password = formData.get("password");
        const rememberMe = formData.get("remember-me") === "on";

        // Create admin client first to attempt login
        const {account} = await createAdminClient();

        try {
            // Attempt to create session first
            const session = await account.createEmailPasswordSession(email, password);

            // Set cookies with conditional expiration based on remember me
            const cookieStore = cookies();
            await cookieStore.set("session", session.secret, {
                path: "/",
                httpOnly: true,
                sameSite: "strict",
                secure: true,
                maxAge: rememberMe ? 30 * 24 * 60 * 60 : undefined // 30 days if remember me is checked
            });

            // Return success response
            return {
                success: true,
                session: session,
            };

        } catch (authError) {
            // Handle authentication errors specifically
            if (authError.code === 401) {
                return {
                    success: false,
                    error: 'Invalid email or password'
                };
            }
            return authError; // Re-throw if it's not a 401
        }

    } catch (error) {
        console.error("Login error:", error);
        return {
            success: false,
            error: error.message || 'An unexpected error occurred during login'
        };
    }
}