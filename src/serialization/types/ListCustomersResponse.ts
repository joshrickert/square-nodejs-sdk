/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Customer } from "./Customer";

export const ListCustomersResponse: core.serialization.ObjectSchema<
    serializers.ListCustomersResponse.Raw,
    Square.ListCustomersResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    customers: core.serialization.list(Customer).optional(),
    cursor: core.serialization.string().optional(),
    count: core.serialization.bigint().optional(),
});

export declare namespace ListCustomersResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        customers?: Customer.Raw[] | null;
        cursor?: string | null;
        count?: (bigint | number) | null;
    }
}
