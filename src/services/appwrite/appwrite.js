"use server";

import config from "../config/config";
import {Client, Account, Databases, Storage, Avatars, Locale} from "node-appwrite";
import {cookies} from "next/headers";

// Create session client
export async function createSessionClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

    const session = (await cookies()).get("session");

    if (!session || !session.value) {
        // Instead of throwing, return a client without a session
        return {
            get account() {
                return new Account(client);
            },
        };
    }

    try {
        client.setSession(session.value);

        return {
            get account() {
                return new Account(client);
            },
        };
    } catch (error) {
        console.error("Error creating session client:", error);
        return {
            get account() {
                return new Account(client);
            },
        };
    }
}

// Create admin client
export async function createAdminClient() {
    try {
        const client = new Client()
            .setEndpoint(config.appwrite.endpoint)
            .setProject(config.appwrite.project)
            .setKey(config.appwrite.key);

        return {
            get account() {
                return new Account(client);
            },
            get databases() {
                return new Databases(client);
            },
            get storage() {
                return new Storage(client);
            },
            get avatars() {
                return new Avatars(client);
            },
            get locale() {
                return new Locale(client);
            }
        };
    } catch (error) {
        console.error("Error creating admin client:", error);
        throw error;
    }
}