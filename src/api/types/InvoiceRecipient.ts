/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a snapshot of customer data. This object stores customer data that is displayed on the invoice
 * and that Square uses to deliver the invoice.
 *
 * When you provide a customer ID for a draft invoice, Square retrieves the associated customer profile and populates
 * the remaining `InvoiceRecipient` fields. You cannot update these fields after the invoice is published.
 * Square updates the customer ID in response to a merge operation, but does not update other fields.
 */
export interface InvoiceRecipient {
    /**
     * The ID of the customer. This is the customer profile ID that
     * you provide when creating a draft invoice.
     */
    customerId?: string | null;
    /** The recipient's given (that is, first) name. */
    givenName?: string;
    /** The recipient's family (that is, last) name. */
    familyName?: string;
    /** The recipient's email address. */
    emailAddress?: string;
    /** The recipient's physical address. */
    address?: Square.Address;
    /** The recipient's phone number. */
    phoneNumber?: string;
    /** The name of the recipient's company. */
    companyName?: string;
    /**
     * The recipient's tax IDs. The country of the seller account determines whether this field
     * is available for the customer. For more information, see [Invoice recipient tax IDs](https://developer.squareup.com/docs/invoices-api/overview#recipient-tax-ids).
     */
    taxIds?: Square.InvoiceRecipientTaxIds;
}
