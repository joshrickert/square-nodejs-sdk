/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A response that contains a list of `GiftCardActivity` objects. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface ListGiftCardActivitiesResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The requested gift card activities or an empty object if none are found. */
    giftCardActivities?: Square.GiftCardActivity[];
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     * subsequent request to retrieve the next set of activities. If a cursor is not present, this is
     * the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
}
