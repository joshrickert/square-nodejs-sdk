/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { InventoryPhysicalCount } from "./InventoryPhysicalCount";

export const GetInventoryPhysicalCountResponse: core.serialization.ObjectSchema<
    serializers.GetInventoryPhysicalCountResponse.Raw,
    Square.GetInventoryPhysicalCountResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    count: InventoryPhysicalCount.optional(),
});

export declare namespace GetInventoryPhysicalCountResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        count?: InventoryPhysicalCount.Raw | null;
    }
}
