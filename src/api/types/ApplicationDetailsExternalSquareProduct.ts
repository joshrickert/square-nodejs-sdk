/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A list of products to return to external callers.
 */
export type ApplicationDetailsExternalSquareProduct =
    | "APPOINTMENTS"
    | "ECOMMERCE_API"
    | "INVOICES"
    | "ONLINE_STORE"
    | "OTHER"
    | "RESTAURANTS"
    | "RETAIL"
    | "SQUARE_POS"
    | "TERMINAL_API"
    | "VIRTUAL_TERMINAL";
export const ApplicationDetailsExternalSquareProduct = {
    Appointments: "APPOINTMENTS",
    EcommerceApi: "ECOMMERCE_API",
    Invoices: "INVOICES",
    OnlineStore: "ONLINE_STORE",
    Other: "OTHER",
    Restaurants: "RESTAURANTS",
    Retail: "RETAIL",
    SquarePos: "SQUARE_POS",
    TerminalApi: "TERMINAL_API",
    VirtualTerminal: "VIRTUAL_TERMINAL",
} as const;
