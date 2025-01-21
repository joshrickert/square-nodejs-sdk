/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         values: {
 *             "key": {
 *                 bookingId: "booking_id",
 *                 key: "key"
 *             }
 *         }
 *     }
 */
export interface BulkDeleteBookingCustomAttributesRequest {
    /**
     * A map containing 1 to 25 individual Delete requests. For each request, provide an
     * arbitrary ID that is unique for this `BulkDeleteBookingCustomAttributes` request and the
     * information needed to delete a custom attribute.
     */
    values: Record<string, Square.BookingCustomAttributeDeleteRequest>;
}
