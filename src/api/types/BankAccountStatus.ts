/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the current verification status of a `BankAccount` object.
 */
export type BankAccountStatus = "VERIFICATION_IN_PROGRESS" | "VERIFIED" | "DISABLED";
export const BankAccountStatus = {
    VerificationInProgress: "VERIFICATION_IN_PROGRESS",
    Verified: "VERIFIED",
    Disabled: "DISABLED",
} as const;
