// app/actions/user/get_user_session.js
"use server"

import {createSessionClient} from "@/services/appwrite/appwrite";

// check if there is a session available
export async function getLoggedInUser() {
    try {
        const {account} = await createSessionClient();
        return await account.get();

    } catch (error) {
        return null;
    }
}