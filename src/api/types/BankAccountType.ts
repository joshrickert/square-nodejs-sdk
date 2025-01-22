/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the financial purpose of the bank account.
 */
export type BankAccountType = "CHECKING" | "SAVINGS" | "INVESTMENT" | "OTHER" | "BUSINESS_CHECKING";
export const BankAccountType = {
    Checking: "CHECKING",
    Savings: "SAVINGS",
    Investment: "INVESTMENT",
    Other: "OTHER",
    BusinessChecking: "BUSINESS_CHECKING",
} as const;
