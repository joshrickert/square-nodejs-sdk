/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CustomerPreferences: core.serialization.ObjectSchema<
    serializers.CustomerPreferences.Raw,
    Square.CustomerPreferences
> = core.serialization.object({
    emailUnsubscribed: core.serialization.property(
        "email_unsubscribed",
        core.serialization.boolean().optionalNullable(),
    ),
});

export declare namespace CustomerPreferences {
    export interface Raw {
        email_unsubscribed?: (boolean | null) | null;
    }
}
