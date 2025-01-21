/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents details about an `ADJUST_DECREMENT` [gift card activity type](entity:GiftCardActivityType).
 */
export interface GiftCardActivityAdjustDecrement {
    /** The amount deducted from the gift card balance. This value is a positive integer. */
    amountMoney: Square.Money;
    /**
     * The reason the gift card balance was adjusted.
     * See [Reason](#type-reason) for possible values
     */
    reason: Square.GiftCardActivityAdjustDecrementReason;
}
