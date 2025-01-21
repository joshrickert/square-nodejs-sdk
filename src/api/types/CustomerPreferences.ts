/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Represents communication preferences for the customer profile.
 */
export interface CustomerPreferences {
    /** Indicates whether the customer has unsubscribed from marketing campaign emails. A value of `true` means that the customer chose to opt out of email marketing from the current Square seller or from all Square sellers. This value is read-only from the Customers API. */
    emailUnsubscribed?: boolean | null;
}
