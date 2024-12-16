// app/actions/user/check_user_handle.js
"use server"

import config from "@/services/config/config";
import {createAdminClient} from "@/services/appwrite/appwrite";
import {Query} from "node-appwrite";

// Check if there is a Handle available
export async function checkIsHandleAvailable(handle) {
    const {databases} = await createAdminClient();

    try {
        const results = await databases.listDocuments(
            config.databases.global_profiles_index.id,
            config.databases.global_profiles_index.collections.profiles_index,
            [
                Query.equal('handle', handle)
            ]
        );

        return results.total === 0;
    } catch (error) {
        console.error('Error checking handle:', error);
        throw new Error(`Failed to check handle availability: ${error.message}`);
    }
}