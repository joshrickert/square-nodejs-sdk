/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface CancelBookingResponse {
    /** The booking that was cancelled. */
    booking?: Square.Booking;
    /** Errors that occurred during the request. */
    errors?: Square.Error_[];
}
