/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Card } from "./Card";

export const DestinationDetailsCardRefundDetails: core.serialization.ObjectSchema<
    serializers.DestinationDetailsCardRefundDetails.Raw,
    Square.DestinationDetailsCardRefundDetails
> = core.serialization.object({
    card: Card.optional(),
    entryMethod: core.serialization.property("entry_method", core.serialization.string().optionalNullable()),
    authResultCode: core.serialization.property("auth_result_code", core.serialization.string().optionalNullable()),
});

export declare namespace DestinationDetailsCardRefundDetails {
    export interface Raw {
        card?: Card.Raw | null;
        entry_method?: (string | null) | null;
        auth_result_code?: (string | null) | null;
    }
}
