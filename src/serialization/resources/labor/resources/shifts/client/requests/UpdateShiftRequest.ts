/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { Shift } from "../../../../../../types/Shift";

export const UpdateShiftRequest: core.serialization.Schema<
    serializers.labor.UpdateShiftRequest.Raw,
    Omit<Square.labor.UpdateShiftRequest, "id">
> = core.serialization.object({
    shift: Shift,
});

export declare namespace UpdateShiftRequest {
    export interface Raw {
        shift: Shift.Raw;
    }
}
