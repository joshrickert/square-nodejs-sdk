/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const UpdateCatalogImageRequest: core.serialization.ObjectSchema<
    serializers.UpdateCatalogImageRequest.Raw,
    Square.UpdateCatalogImageRequest
> = core.serialization.object({
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string()),
});

export declare namespace UpdateCatalogImageRequest {
    export interface Raw {
        idempotency_key: string;
    }
}
