// services/config/config.js

const config = {

    appwrite: {
        endpoint: process.env.APPWRITE_ENDPOINT,
        project: process.env.APPWRITE_PROJECT,
        key: process.env.APPWRITE_KEY,
    },

    databases: {

        // GLOBAL PROFILES =====================================================
        global_profiles_index: {
            id: process.env.APPWRITE_GLOBAL_PROFILES_INDEX,
            collections: {
                profiles_index: process.env.APPWRITE_PROFILES_INDEX,
            }
        },
        // END GLOBALS =====================================================
        // USER DATA =====================================================
        user_profiles_data: {
            id: process.env.APPWRITE_USER_PROFILES_DATA,
            collections: {
                user_profile: process.env.APPWRITE_USER_PROFILES,
            }
        }
        // END USER DATA =====================================================

    }


}

export default config;