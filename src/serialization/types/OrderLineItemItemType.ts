/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const OrderLineItemItemType: core.serialization.Schema<
    serializers.OrderLineItemItemType.Raw,
    Square.OrderLineItemItemType
> = core.serialization.enum_(["ITEM", "CUSTOM_AMOUNT", "GIFT_CARD"]);

export declare namespace OrderLineItemItemType {
    export type Raw = "ITEM" | "CUSTOM_AMOUNT" | "GIFT_CARD";
}
