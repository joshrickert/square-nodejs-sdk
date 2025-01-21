/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";

export const OrderLineItemAppliedTax: core.serialization.ObjectSchema<
    serializers.OrderLineItemAppliedTax.Raw,
    Square.OrderLineItemAppliedTax
> = core.serialization.object({
    uid: core.serialization.string().optionalNullable(),
    taxUid: core.serialization.property("tax_uid", core.serialization.string()),
    appliedMoney: core.serialization.property("applied_money", Money.optional()),
});

export declare namespace OrderLineItemAppliedTax {
    export interface Raw {
        uid?: (string | null) | null;
        tax_uid: string;
        applied_money?: Money.Raw | null;
    }
}
