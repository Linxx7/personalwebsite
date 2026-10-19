export const ANALYTICS_CONSENT_KEY = "ricardo-analytics-consent";
export const ANALYTICS_PREFERENCES_EVENT = "ricardo:analytics-preferences";
export const CONTACT_LAST_SENT_KEY = "ricardo-contact-last-sent";
export const CONTACT_COOLDOWN_MS = 60_000;

/**
 * @typedef {"accepted" | "rejected"} AnalyticsConsent
 */

/**
 * @param {string | null} value
 * @returns {AnalyticsConsent | null}
 */
export function parseAnalyticsConsent(value) {
  return value === "accepted" || value === "rejected" ? value : null;
}

/**
 * @param {{ honeypot: string; lastSubmittedAt: number; now: number }} input
 * @returns {"spam" | "cooldown" | null}
 */
export function getContactBlockReason({ honeypot, lastSubmittedAt, now }) {
  if (honeypot.trim()) return "spam";

  if (
    Number.isFinite(lastSubmittedAt) &&
    lastSubmittedAt > 0 &&
    now - lastSubmittedAt < CONTACT_COOLDOWN_MS
  ) {
    return "cooldown";
  }

  return null;
}

