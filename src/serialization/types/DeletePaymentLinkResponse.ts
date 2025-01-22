/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const DeletePaymentLinkResponse: core.serialization.ObjectSchema<
    serializers.DeletePaymentLinkResponse.Raw,
    Square.DeletePaymentLinkResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    id: core.serialization.string().optional(),
    cancelledOrderId: core.serialization.property("cancelled_order_id", core.serialization.string().optional()),
});

export declare namespace DeletePaymentLinkResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        id?: string | null;
        cancelled_order_id?: string | null;
    }
}
