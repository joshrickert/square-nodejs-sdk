/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
 */
export interface TenderCardDetails {
    /**
     * The credit card payment's current state (such as `AUTHORIZED` or
     * `CAPTURED`). See [TenderCardDetailsStatus](entity:TenderCardDetailsStatus)
     * for possible values.
     * See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values
     */
    status?: Square.TenderCardDetailsStatus;
    /** The credit card's non-confidential details. */
    card?: Square.Card;
    /**
     * The method used to enter the card's details for the transaction.
     * See [TenderCardDetailsEntryMethod](#type-tendercarddetailsentrymethod) for possible values
     */
    entryMethod?: Square.TenderCardDetailsEntryMethod;
}
