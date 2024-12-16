// utils/security-validation.js
/**
 * Validates security status of an IP address based on IP Registry data
 * @param {Object} security - Security object from IP Registry response
 * @returns {Object} Validation result with status and reason
 */


export function validateSecurityStatus(security) {
    // High-risk checks that should always block registration
    const criticalSecurityChecks = {
        is_attacker: 'Registration blocked: Malicious activity detected',
        is_threat: 'Registration blocked: Security threat detected',
        is_abuser: 'Registration blocked: Abuse history detected',
        is_bogon: 'Registration blocked: Invalid IP address'
    };

    // Privacy tools that might be restricted based on policy
    const privacyChecks = {
        is_vpn: 'Registration blocked: VPN connections not allowed',
        is_proxy: 'Registration blocked: Proxy connections not allowed',
        is_tor: 'Registration blocked: Tor network not allowed',
        is_anonymous: 'Registration blocked: Anonymous connections not allowed'
    };

    // Check for critical security issues first
    for (const [check, message] of Object.entries(criticalSecurityChecks)) {
        if (security[check]) {
            return {
                allowed: false,
                reason: message,
                riskLevel: 'critical'
            };
        }
    }

    // Check for privacy tools
    for (const [check, message] of Object.entries(privacyChecks)) {
        if (security[check]) {
            return {
                allowed: false,
                reason: message,
                riskLevel: 'moderate'
            };
        }
    }

    // If no issues found, allow registration
    return {
        allowed: true,
        reason: null,
        riskLevel: 'safe'
    };
}