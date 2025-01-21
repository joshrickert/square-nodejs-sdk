/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { CatalogObjectType } from "../../../../types/CatalogObjectType";
import { CatalogQuery } from "../../../../types/CatalogQuery";

export const SearchCatalogObjectsRequest: core.serialization.Schema<
    serializers.SearchCatalogObjectsRequest.Raw,
    Square.SearchCatalogObjectsRequest
> = core.serialization.object({
    cursor: core.serialization.string().optional(),
    objectTypes: core.serialization.property("object_types", core.serialization.list(CatalogObjectType).optional()),
    includeDeletedObjects: core.serialization.property(
        "include_deleted_objects",
        core.serialization.boolean().optional(),
    ),
    includeRelatedObjects: core.serialization.property(
        "include_related_objects",
        core.serialization.boolean().optional(),
    ),
    beginTime: core.serialization.property("begin_time", core.serialization.string().optional()),
    query: CatalogQuery.optional(),
    limit: core.serialization.number().optional(),
    includeCategoryPathToRoot: core.serialization.property(
        "include_category_path_to_root",
        core.serialization.boolean().optional(),
    ),
});

export declare namespace SearchCatalogObjectsRequest {
    export interface Raw {
        cursor?: string | null;
        object_types?: CatalogObjectType.Raw[] | null;
        include_deleted_objects?: boolean | null;
        include_related_objects?: boolean | null;
        begin_time?: string | null;
        query?: CatalogQuery.Raw | null;
        limit?: number | null;
        include_category_path_to_root?: boolean | null;
    }
}
