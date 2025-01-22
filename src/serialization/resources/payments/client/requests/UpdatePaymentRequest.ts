/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Payment } from "../../../../types/Payment";

export const UpdatePaymentRequest: core.serialization.Schema<
    serializers.UpdatePaymentRequest.Raw,
    Omit<Square.UpdatePaymentRequest, "paymentId">
> = core.serialization.object({
    payment: Payment.optional(),
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string()),
});

export declare namespace UpdatePaymentRequest {
    export interface Raw {
        payment?: Payment.Raw | null;
        idempotency_key: string;
    }
}
