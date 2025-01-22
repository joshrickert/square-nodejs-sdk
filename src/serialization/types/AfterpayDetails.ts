/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const AfterpayDetails: core.serialization.ObjectSchema<serializers.AfterpayDetails.Raw, Square.AfterpayDetails> =
    core.serialization.object({
        emailAddress: core.serialization.property("email_address", core.serialization.string().optionalNullable()),
    });

export declare namespace AfterpayDetails {
    export interface Raw {
        email_address?: (string | null) | null;
    }
}
