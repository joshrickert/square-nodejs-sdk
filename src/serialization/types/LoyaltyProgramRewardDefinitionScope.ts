/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const LoyaltyProgramRewardDefinitionScope: core.serialization.Schema<
    serializers.LoyaltyProgramRewardDefinitionScope.Raw,
    Square.LoyaltyProgramRewardDefinitionScope
> = core.serialization.enum_(["ORDER", "ITEM_VARIATION", "CATEGORY"]);

export declare namespace LoyaltyProgramRewardDefinitionScope {
    export type Raw = "ORDER" | "ITEM_VARIATION" | "CATEGORY";
}
