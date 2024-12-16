"use server";

export async function validateForm(form_data) {
    // Extract to form fields
    const email = form_data.get("email");
    const password = form_data.get("password");
    const name = form_data.get("name");
    const username = form_data.get("username");
    const handle = form_data.get("handle");

    // Validate all required fields
    if (!email || !password || !name || !username || !handle) {
        return {
            error: "All fields are required"
        };
    }

    if (username.length < 3 || username.length > 50) {
        return {
            error: "Username must be between 3 and 30 characters"
        };
    }

    if (handle.length < 3 || handle.length > 36) {
        return {
            error: "Handle must be between 3 and 30 characters"
        };
    }

    if (!/^[a-zA-Z0-9_]+$/.test(handle)) {
        return {
            error: "Handle can only contain letters, numbers, and underscores"
        };
    }

    // Add this return statement for successful validation
    return { success: true };
}