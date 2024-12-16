"use server";

import {cookies} from "next/headers";
import {createSessionClient} from "@/services/appwrite/appwrite";

export async function logoutUser() {
    try {
        // Create session client
        const {account} = await createSessionClient();

        // Delete the current session
        await account.deleteSession('current');

        // Clear the session cookie
        const cookieStore = cookies();
        (await cookieStore).delete("session");

        return {
            success: true,
            message: 'Logged out successfully'
        };
    } catch (error) {
        console.error("Logout error:", error);
        return {
            success: false,
            error: error.message || 'An unexpected error occurred during logout'
        };
    }
}