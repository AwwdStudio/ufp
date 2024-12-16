// app/actions/geo/geo.js
"use server"

import {createAdminClient} from "@/services/appwrite/appwrite";

/**
 * Multi-source location detection with IP Registry integration
 */
export async function detectUserLocation() {
    try {
        // Get the location data from multiple sources
        const [appwriteLocation, ipRegistryData] = await Promise.all([
            getAppwriteLocation(),
            // We'll get IP Registry data after we have the IP from Appwrite
            null
        ].filter(Boolean));

        // If we have Appwrite location, fetch IP Registry data
        let enrichedIpData = null;
        if (appwriteLocation?.ip) {
            enrichedIpData = await getIpRegistryData(appwriteLocation.ip);
        }

        return {
            appwriteLocation,
            ipRegistry: enrichedIpData
        }
    } catch (error) {
        console.error("Location detection error:", error);
        return null;
    }
}

/**
 * Get location from Appwrite
 */
async function getAppwriteLocation() {
    try {
        const { locale } = await createAdminClient();
        const location = await locale.get();

        return {
            source: 'appwrite',
            countryCode: location.countryCode,
            country: location.country,
            ip: location.ip
        };
    } catch (error) {
        console.error("Appwrite location error:", error);
        return null;
    }
}

/**
 * Get enriched location data from IP Registry
 */
async function getIpRegistryData(ip) {
    try {
        const apiKey = process.env.IP_REGISTRY_API_KEY;
        if (!apiKey) {
            throw new Error("IP Registry API key not configured");
        }

        const response = await fetch(
            `https://api.ipregistry.co/${ip}?key=${apiKey}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`IP Registry API error: ${response.statusText}`);
        }

        const data = await response.json();

        // Return the complete data structure
        return {
            location: data.location,
            currency: data.currency,
            connection: data.connection,
            company: data.company,
            carrier: data.carrier,
            time_zone: data.time_zone,
            security: data.security
        };
    } catch (error) {
        console.error("IP Registry error:", error);
        return null;
    }
}