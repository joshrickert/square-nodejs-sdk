/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { SortOrder } from "./SortOrder";

export const CatalogQuerySortedAttribute: core.serialization.ObjectSchema<
    serializers.CatalogQuerySortedAttribute.Raw,
    Square.CatalogQuerySortedAttribute
> = core.serialization.object({
    attributeName: core.serialization.property("attribute_name", core.serialization.string()),
    initialAttributeValue: core.serialization.property(
        "initial_attribute_value",
        core.serialization.string().optionalNullable(),
    ),
    sortOrder: core.serialization.property("sort_order", SortOrder.optional()),
});

export declare namespace CatalogQuerySortedAttribute {
    export interface Raw {
        attribute_name: string;
        initial_attribute_value?: (string | null) | null;
        sort_order?: SortOrder.Raw | null;
    }
}
