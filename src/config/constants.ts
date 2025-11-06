/**
 * Application-wide constants
 */

/**
 * Primary contact email for Rediacc
 * Used across the website for forms, structured data, and contact information
 */
export const CONTACT_EMAIL = 'contact@rediacc.com';

/**
 * External Links
 * Centralized configuration for important external URLs
 */
export const EXTERNAL_LINKS = {
  /**
   * Schedule Consultation - Outlook Booking Page
   * Used for high-intent CTAs (pricing, solutions, sales contact)
   * Update this URL when changing scheduling platforms
   */
  SCHEDULE_CONSULTATION: 'https://outlook.office.com/owa/calendar/RediaccConsultationServices@rediacc.com/bookings/?ismsaljsauthenabled',
} as const;

/**
 * Get the console URL based on the current environment
 * - Production (www.rediacc.com): https://console.rediacc.com/
 * - Other domains (tunnels, staging, etc.): {current-origin}/console
 *
 * This function dynamically detects the hosting environment and returns the appropriate console URL
 */
export function getConsoleUrl(): string {
  // Server-side or fallback: use production default
  if (typeof window === 'undefined') {
    return 'https://console.rediacc.com/';
  }

  const currentOrigin = window.location.origin;
  const isProduction = currentOrigin === 'https://www.rediacc.com';

  return isProduction
    ? 'https://console.rediacc.com/'
    : `${currentOrigin}/console`;
}
