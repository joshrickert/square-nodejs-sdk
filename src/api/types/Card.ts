/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents the payment details of a card to be used for payments. These
 * details are determined by the payment token generated by Web Payments SDK.
 */
export interface Card {
    /** Unique ID for this card. Generated by Square. */
    id?: string;
    /**
     * The card's brand.
     * See [CardBrand](#type-cardbrand) for possible values
     */
    cardBrand?: Square.CardBrand;
    /** The last 4 digits of the card number. */
    last4?: string;
    /** The expiration month of the associated card as an integer between 1 and 12. */
    expMonth?: bigint | null;
    /** The four-digit year of the card's expiration date. */
    expYear?: bigint | null;
    /** The name of the cardholder. */
    cardholderName?: string | null;
    /** The billing address for this card. */
    billingAddress?: Square.Address;
    /**
     * Intended as a Square-assigned identifier, based
     * on the card number, to identify the card across multiple locations within a
     * single application.
     */
    fingerprint?: string;
    /** **Required** The ID of a customer created using the Customers API to be associated with the card. */
    customerId?: string | null;
    /** The ID of the merchant associated with the card. */
    merchantId?: string;
    /**
     * An optional user-defined reference ID that associates this card with
     * another entity in an external system. For example, a customer ID from an
     * external customer management system.
     */
    referenceId?: string | null;
    /** Indicates whether or not a card can be used for payments. */
    enabled?: boolean;
    /**
     * The type of the card.
     * The Card object includes this field only in response to Payments API calls.
     * See [CardType](#type-cardtype) for possible values
     */
    cardType?: Square.CardType;
    /**
     * Indicates whether the Card is prepaid or not.
     * The Card object includes this field only in response to Payments API calls.
     * See [CardPrepaidType](#type-cardprepaidtype) for possible values
     */
    prepaidType?: Square.CardPrepaidType;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API
     * returns this field.
     */
    bin?: string;
    /**
     * Current version number of the card. Increments with each card update. Requests to update an
     * existing Card object will be rejected unless the version in the request matches the current
     * version for the Card.
     */
    version?: bigint;
    /**
     * The card's co-brand if available. For example, an Afterpay virtual card would have a
     * co-brand of AFTERPAY.
     * See [CardCoBrand](#type-cardcobrand) for possible values
     */
    cardCoBrand?: Square.CardCoBrand;
}
