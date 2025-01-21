/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents an output from a call to [RetrieveVendor](api-endpoint:Vendors-RetrieveVendor).
 */
export interface GetVendorResponse {
    /** Errors encountered when the request fails. */
    errors?: Square.Error_[];
    /** The successfully retrieved [Vendor](entity:Vendor) object. */
    vendor?: Square.Vendor;
}
