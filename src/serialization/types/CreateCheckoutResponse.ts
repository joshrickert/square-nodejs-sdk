/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Checkout } from "./Checkout";
import { Error_ } from "./Error_";

export const CreateCheckoutResponse: core.serialization.ObjectSchema<
    serializers.CreateCheckoutResponse.Raw,
    Square.CreateCheckoutResponse
> = core.serialization.object({
    checkout: Checkout.optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace CreateCheckoutResponse {
    export interface Raw {
        checkout?: Checkout.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
