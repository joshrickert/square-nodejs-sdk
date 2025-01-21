/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { InventoryCount } from "./InventoryCount";

export const BatchGetInventoryCountsResponse: core.serialization.ObjectSchema<
    serializers.BatchGetInventoryCountsResponse.Raw,
    Square.BatchGetInventoryCountsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    counts: core.serialization.list(InventoryCount).optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace BatchGetInventoryCountsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        counts?: InventoryCount.Raw[] | null;
        cursor?: string | null;
    }
}
