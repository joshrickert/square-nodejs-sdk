/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Location } from "./Location";

export const CreateLocationResponse: core.serialization.ObjectSchema<
    serializers.CreateLocationResponse.Raw,
    Square.CreateLocationResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    location: Location.optional(),
});

export declare namespace CreateLocationResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        location?: Location.Raw | null;
    }
}
