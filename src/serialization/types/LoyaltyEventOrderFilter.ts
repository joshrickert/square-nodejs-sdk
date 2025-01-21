/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const LoyaltyEventOrderFilter: core.serialization.ObjectSchema<
    serializers.LoyaltyEventOrderFilter.Raw,
    Square.LoyaltyEventOrderFilter
> = core.serialization.object({
    orderId: core.serialization.property("order_id", core.serialization.string()),
});

export declare namespace LoyaltyEventOrderFilter {
    export interface Raw {
        order_id: string;
    }
}
