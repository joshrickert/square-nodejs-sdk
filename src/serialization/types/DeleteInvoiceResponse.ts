/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const DeleteInvoiceResponse: core.serialization.ObjectSchema<
    serializers.DeleteInvoiceResponse.Raw,
    Square.DeleteInvoiceResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace DeleteInvoiceResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
    }
}
