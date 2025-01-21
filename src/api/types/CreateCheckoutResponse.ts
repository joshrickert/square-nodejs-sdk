/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the fields that are included in the response body of
 * a request to the `CreateCheckout` endpoint.
 */
export interface CreateCheckoutResponse {
    /** The newly created `checkout` object associated with the provided idempotency key. */
    checkout?: Square.Checkout;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
