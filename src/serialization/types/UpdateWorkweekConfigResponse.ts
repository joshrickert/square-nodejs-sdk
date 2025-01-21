/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { WorkweekConfig } from "./WorkweekConfig";
import { Error_ } from "./Error_";

export const UpdateWorkweekConfigResponse: core.serialization.ObjectSchema<
    serializers.UpdateWorkweekConfigResponse.Raw,
    Square.UpdateWorkweekConfigResponse
> = core.serialization.object({
    workweekConfig: core.serialization.property("workweek_config", WorkweekConfig.optional()),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace UpdateWorkweekConfigResponse {
    export interface Raw {
        workweek_config?: WorkweekConfig.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
