/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a [ListLocationCustomAttributes](api-endpoint:LocationCustomAttributes-ListLocationCustomAttributes) response.
 * Either `custom_attributes`, an empty object, or `errors` is present in the response. If additional
 * results are available, the `cursor` field is also present along with `custom_attributes`.
 */
export interface ListLocationCustomAttributesResponse {
    /**
     * The retrieved custom attributes. If `with_definitions` was set to `true` in the request,
     * the custom attribute definition is returned in the `definition` field of each custom attribute.
     * If no custom attributes are found, Square returns an empty object (`{}`).
     */
    customAttributes?: Square.CustomAttribute[];
    /**
     * The cursor to use in your next call to this endpoint to retrieve the next page of results
     * for your original request. This field is present only if the request succeeded and additional
     * results are available. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
