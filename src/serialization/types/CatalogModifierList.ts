/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogModifierListSelectionType } from "./CatalogModifierListSelectionType";
import { CatalogModifierListModifierType } from "./CatalogModifierListModifierType";

export const CatalogModifierList: core.serialization.ObjectSchema<
    serializers.CatalogModifierList.Raw,
    Square.CatalogModifierList
> = core.serialization.object({
    name: core.serialization.string().optionalNullable(),
    ordinal: core.serialization.number().optionalNullable(),
    selectionType: core.serialization.property("selection_type", CatalogModifierListSelectionType.optional()),
    modifiers: core.serialization.list(core.serialization.lazy(() => serializers.CatalogObject)).optionalNullable(),
    imageIds: core.serialization.property(
        "image_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    modifierType: core.serialization.property("modifier_type", CatalogModifierListModifierType.optional()),
    maxLength: core.serialization.property("max_length", core.serialization.number().optionalNullable()),
    textRequired: core.serialization.property("text_required", core.serialization.boolean().optionalNullable()),
    internalName: core.serialization.property("internal_name", core.serialization.string().optionalNullable()),
});

export declare namespace CatalogModifierList {
    export interface Raw {
        name?: (string | null) | null;
        ordinal?: (number | null) | null;
        selection_type?: CatalogModifierListSelectionType.Raw | null;
        modifiers?: (serializers.CatalogObject.Raw[] | null) | null;
        image_ids?: (string[] | null) | null;
        modifier_type?: CatalogModifierListModifierType.Raw | null;
        max_length?: (number | null) | null;
        text_required?: (boolean | null) | null;
        internal_name?: (string | null) | null;
    }
}
