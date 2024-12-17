"use server";

import {createAdminClient} from "@/services/appwrite/appwrite";
import {cookies} from "next/headers";

export async function loginWithEmailAndPassword(formData) {
    try {
        const email = formData.get("email");
        const password = formData.get("password");
        const rememberMe = formData.get("remember-me") === "on";

        const {account} = await createAdminClient();

        try {
            const session = await account.createEmailPasswordSession(email, password);

            // Modified cookie settings for better mobile compatibility
            const cookieStore = cookies();
            await cookieStore.set("session", session.secret, {
                path: "/",
                httpOnly: true,
                sameSite: "lax", // Changed from strict to lax for better mobile support
                secure: process.env.NODE_ENV === 'production', // Only secure in production
                maxAge: rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60 // Default 24 hours if not remembered
            });

            return {
                success: true,
                session: session,
            };

        } catch (authError) {
            console.error("Auth error:", authError);
            if (authError.code === 401) {
                return {
                    success: false,
                    error: 'Invalid email or password'
                };
            }
            return {
                success: false,
                error: 'Authentication failed'
            };
        }

    } catch (error) {
        console.error("Login error:", error);
        return {
            success: false,
            error: 'An unexpected error occurred during login'
        };
    }
}