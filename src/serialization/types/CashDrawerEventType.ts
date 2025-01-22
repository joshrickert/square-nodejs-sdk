/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CashDrawerEventType: core.serialization.Schema<
    serializers.CashDrawerEventType.Raw,
    Square.CashDrawerEventType
> = core.serialization.enum_([
    "NO_SALE",
    "CASH_TENDER_PAYMENT",
    "OTHER_TENDER_PAYMENT",
    "CASH_TENDER_CANCELLED_PAYMENT",
    "OTHER_TENDER_CANCELLED_PAYMENT",
    "CASH_TENDER_REFUND",
    "OTHER_TENDER_REFUND",
    "PAID_IN",
    "PAID_OUT",
]);

export declare namespace CashDrawerEventType {
    export type Raw =
        | "NO_SALE"
        | "CASH_TENDER_PAYMENT"
        | "OTHER_TENDER_PAYMENT"
        | "CASH_TENDER_CANCELLED_PAYMENT"
        | "OTHER_TENDER_CANCELLED_PAYMENT"
        | "CASH_TENDER_REFUND"
        | "OTHER_TENDER_REFUND"
        | "PAID_IN"
        | "PAID_OUT";
}
