/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { InventoryChangeType } from "./InventoryChangeType";
import { InventoryState } from "./InventoryState";

export const BatchRetrieveInventoryChangesRequest: core.serialization.ObjectSchema<
    serializers.BatchRetrieveInventoryChangesRequest.Raw,
    Square.BatchRetrieveInventoryChangesRequest
> = core.serialization.object({
    catalogObjectIds: core.serialization.property(
        "catalog_object_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    locationIds: core.serialization.property(
        "location_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    types: core.serialization.list(InventoryChangeType).optionalNullable(),
    states: core.serialization.list(InventoryState).optionalNullable(),
    updatedAfter: core.serialization.property("updated_after", core.serialization.string().optionalNullable()),
    updatedBefore: core.serialization.property("updated_before", core.serialization.string().optionalNullable()),
    cursor: core.serialization.string().optionalNullable(),
    limit: core.serialization.number().optionalNullable(),
});

export declare namespace BatchRetrieveInventoryChangesRequest {
    export interface Raw {
        catalog_object_ids?: (string[] | null) | null;
        location_ids?: (string[] | null) | null;
        types?: (InventoryChangeType.Raw[] | null) | null;
        states?: (InventoryState.Raw[] | null) | null;
        updated_after?: (string | null) | null;
        updated_before?: (string | null) | null;
        cursor?: (string | null) | null;
        limit?: (number | null) | null;
    }
}
