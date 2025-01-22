/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomAttribute } from "./CustomAttribute";
import { Error_ } from "./Error_";

export const UpsertMerchantCustomAttributeResponse: core.serialization.ObjectSchema<
    serializers.UpsertMerchantCustomAttributeResponse.Raw,
    Square.UpsertMerchantCustomAttributeResponse
> = core.serialization.object({
    customAttribute: core.serialization.property("custom_attribute", CustomAttribute.optional()),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace UpsertMerchantCustomAttributeResponse {
    export interface Raw {
        custom_attribute?: CustomAttribute.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
