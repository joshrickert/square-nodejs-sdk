/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a [DeleteCustomerCustomAttribute](api-endpoint:CustomerCustomAttributes-DeleteCustomerCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteCustomerCustomAttributeResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
