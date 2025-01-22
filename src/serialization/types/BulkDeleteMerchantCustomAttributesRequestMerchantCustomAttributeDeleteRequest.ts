/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest: core.serialization.ObjectSchema<
    serializers.BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest.Raw,
    Square.BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest
> = core.serialization.object({
    key: core.serialization.string().optional(),
});

export declare namespace BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest {
    export interface Raw {
        key?: string | null;
    }
}
