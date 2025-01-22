/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type V1OrderHistoryEntryAction =
    | "ORDER_PLACED"
    | "DECLINED"
    | "PAYMENT_RECEIVED"
    | "CANCELED"
    | "COMPLETED"
    | "REFUNDED"
    | "EXPIRED";
export const V1OrderHistoryEntryAction = {
    OrderPlaced: "ORDER_PLACED",
    Declined: "DECLINED",
    PaymentReceived: "PAYMENT_RECEIVED",
    Canceled: "CANCELED",
    Completed: "COMPLETED",
    Refunded: "REFUNDED",
    Expired: "EXPIRED",
} as const;
