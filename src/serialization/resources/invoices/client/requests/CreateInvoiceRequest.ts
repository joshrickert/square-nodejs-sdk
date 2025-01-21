/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Invoice } from "../../../../types/Invoice";

export const CreateInvoiceRequest: core.serialization.Schema<
    serializers.CreateInvoiceRequest.Raw,
    Square.CreateInvoiceRequest
> = core.serialization.object({
    invoice: Invoice,
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optional()),
});

export declare namespace CreateInvoiceRequest {
    export interface Raw {
        invoice: Invoice.Raw;
        idempotency_key?: string | null;
    }
}
