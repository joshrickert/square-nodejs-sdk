/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LocationBookingProfile } from "./LocationBookingProfile";
import { Error_ } from "./Error_";

export const ListLocationBookingProfilesResponse: core.serialization.ObjectSchema<
    serializers.ListLocationBookingProfilesResponse.Raw,
    Square.ListLocationBookingProfilesResponse
> = core.serialization.object({
    locationBookingProfiles: core.serialization.property(
        "location_booking_profiles",
        core.serialization.list(LocationBookingProfile).optional(),
    ),
    cursor: core.serialization.string().optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace ListLocationBookingProfilesResponse {
    export interface Raw {
        location_booking_profiles?: LocationBookingProfile.Raw[] | null;
        cursor?: string | null;
        errors?: Error_.Raw[] | null;
    }
}
