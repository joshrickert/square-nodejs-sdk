/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface GetDeviceCodeResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The queried DeviceCode. */
    deviceCode?: Square.DeviceCode;
}
