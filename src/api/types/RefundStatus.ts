/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates a refund's current status.
 */
export type RefundStatus = "PENDING" | "APPROVED" | "REJECTED" | "FAILED";
export const RefundStatus = {
    Pending: "PENDING",
    Approved: "APPROVED",
    Rejected: "REJECTED",
    Failed: "FAILED",
} as const;
