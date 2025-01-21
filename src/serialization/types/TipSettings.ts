/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const TipSettings: core.serialization.ObjectSchema<serializers.TipSettings.Raw, Square.TipSettings> =
    core.serialization.object({
        allowTipping: core.serialization.property("allow_tipping", core.serialization.boolean().optionalNullable()),
        separateTipScreen: core.serialization.property(
            "separate_tip_screen",
            core.serialization.boolean().optionalNullable(),
        ),
        customTipField: core.serialization.property(
            "custom_tip_field",
            core.serialization.boolean().optionalNullable(),
        ),
        tipPercentages: core.serialization.property(
            "tip_percentages",
            core.serialization.list(core.serialization.number()).optionalNullable(),
        ),
        smartTipping: core.serialization.property("smart_tipping", core.serialization.boolean().optionalNullable()),
    });

export declare namespace TipSettings {
    export interface Raw {
        allow_tipping?: (boolean | null) | null;
        separate_tip_screen?: (boolean | null) | null;
        custom_tip_field?: (boolean | null) | null;
        tip_percentages?: (number[] | null) | null;
        smart_tipping?: (boolean | null) | null;
    }
}
