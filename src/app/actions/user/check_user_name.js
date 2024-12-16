// app/actions/user/check_user_name.js
"use server"

import config from "@/services/config/config";
import {createAdminClient} from "@/services/appwrite/appwrite";
import {Query} from "node-appwrite";

// Check if there is a username available
export async function checkIsUsernameAvailable(username) {
    const {databases} = await createAdminClient();

    try {
        const results = await databases.listDocuments(
            config.databases.global_profiles_index.id,
            config.databases.global_profiles_index.collections.profiles_index,
            [
                Query.equal('username', username)
            ]
        );

        return results.total === 0;
    } catch (error) {
        console.error('Error checking username:', error);
        // Add more detailed error information
        throw new Error(`Failed to check username availability: ${error.message}`);
    }
}