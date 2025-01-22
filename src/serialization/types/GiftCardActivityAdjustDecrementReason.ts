/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const GiftCardActivityAdjustDecrementReason: core.serialization.Schema<
    serializers.GiftCardActivityAdjustDecrementReason.Raw,
    Square.GiftCardActivityAdjustDecrementReason
> = core.serialization.enum_([
    "SUSPICIOUS_ACTIVITY",
    "BALANCE_ACCIDENTALLY_INCREASED",
    "SUPPORT_ISSUE",
    "PURCHASE_WAS_REFUNDED",
]);

export declare namespace GiftCardActivityAdjustDecrementReason {
    export type Raw =
        | "SUSPICIOUS_ACTIVITY"
        | "BALANCE_ACCIDENTALLY_INCREASED"
        | "SUPPORT_ISSUE"
        | "PURCHASE_WAS_REFUNDED";
}
