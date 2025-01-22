/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Location } from "../../../../types/Location";

export const UpdateLocationRequest: core.serialization.Schema<
    serializers.UpdateLocationRequest.Raw,
    Omit<Square.UpdateLocationRequest, "locationId">
> = core.serialization.object({
    location: Location.optional(),
});

export declare namespace UpdateLocationRequest {
    export interface Raw {
        location?: Location.Raw | null;
    }
}
