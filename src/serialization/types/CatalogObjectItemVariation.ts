/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogItemVariation } from "./CatalogItemVariation";
import { CatalogObjectBase } from "./CatalogObjectBase";

export const CatalogObjectItemVariation: core.serialization.ObjectSchema<
    serializers.CatalogObjectItemVariation.Raw,
    Square.CatalogObjectItemVariation
> = core.serialization
    .object({
        itemVariationData: core.serialization.property("item_variation_data", CatalogItemVariation.optional()),
    })
    .extend(CatalogObjectBase);

export declare namespace CatalogObjectItemVariation {
    export interface Raw extends CatalogObjectBase.Raw {
        item_variation_data?: CatalogItemVariation.Raw | null;
    }
}
