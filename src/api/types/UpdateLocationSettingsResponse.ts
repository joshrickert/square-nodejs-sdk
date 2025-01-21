/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface UpdateLocationSettingsResponse {
    /** Any errors that occurred when updating the location settings. */
    errors?: Square.Error_[];
    /** The updated location settings. */
    locationSettings?: Square.CheckoutLocationSettings;
}
