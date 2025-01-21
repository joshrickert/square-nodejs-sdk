/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";

export const OrderLineItemAppliedDiscount: core.serialization.ObjectSchema<
    serializers.OrderLineItemAppliedDiscount.Raw,
    Square.OrderLineItemAppliedDiscount
> = core.serialization.object({
    uid: core.serialization.string().optionalNullable(),
    discountUid: core.serialization.property("discount_uid", core.serialization.string()),
    appliedMoney: core.serialization.property("applied_money", Money.optional()),
});

export declare namespace OrderLineItemAppliedDiscount {
    export interface Raw {
        uid?: (string | null) | null;
        discount_uid: string;
        applied_money?: Money.Raw | null;
    }
}
