/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Order } from "../../../../types/Order";

export const UpdateOrderRequest: core.serialization.Schema<
    serializers.UpdateOrderRequest.Raw,
    Omit<Square.UpdateOrderRequest, "orderId">
> = core.serialization.object({
    order: Order.optional(),
    fieldsToClear: core.serialization.property(
        "fields_to_clear",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optionalNullable()),
});

export declare namespace UpdateOrderRequest {
    export interface Raw {
        order?: Order.Raw | null;
        fields_to_clear?: (string[] | null) | null;
        idempotency_key?: (string | null) | null;
    }
}
