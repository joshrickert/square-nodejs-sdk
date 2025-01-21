/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const OrderSource: core.serialization.ObjectSchema<serializers.OrderSource.Raw, Square.OrderSource> =
    core.serialization.object({
        name: core.serialization.string().optionalNullable(),
    });

export declare namespace OrderSource {
    export interface Raw {
        name?: (string | null) | null;
    }
}
