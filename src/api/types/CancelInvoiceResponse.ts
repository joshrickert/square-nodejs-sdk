/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The response returned by the `CancelInvoice` request.
 */
export interface CancelInvoiceResponse {
    /** The canceled invoice. */
    invoice?: Square.Invoice;
    /** Information about errors encountered during the request. */
    errors?: Square.Error_[];
}
