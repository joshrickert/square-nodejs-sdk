/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Shift } from "./Shift";
import { Error_ } from "./Error_";

export const CreateShiftResponse: core.serialization.ObjectSchema<
    serializers.CreateShiftResponse.Raw,
    Square.CreateShiftResponse
> = core.serialization.object({
    shift: Shift.optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace CreateShiftResponse {
    export interface Raw {
        shift?: Shift.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
