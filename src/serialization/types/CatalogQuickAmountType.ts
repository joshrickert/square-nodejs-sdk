/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogQuickAmountType: core.serialization.Schema<
    serializers.CatalogQuickAmountType.Raw,
    Square.CatalogQuickAmountType
> = core.serialization.enum_(["QUICK_AMOUNT_TYPE_MANUAL", "QUICK_AMOUNT_TYPE_AUTO"]);

export declare namespace CatalogQuickAmountType {
    export type Raw = "QUICK_AMOUNT_TYPE_MANUAL" | "QUICK_AMOUNT_TYPE_AUTO";
}
