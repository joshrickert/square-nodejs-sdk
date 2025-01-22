/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Payment } from "./Payment";

export const ListPaymentsResponse: core.serialization.ObjectSchema<
    serializers.ListPaymentsResponse.Raw,
    Square.ListPaymentsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    payments: core.serialization.list(Payment).optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace ListPaymentsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        payments?: Payment.Raw[] | null;
        cursor?: string | null;
    }
}
