/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Subscription } from "./Subscription";

export const SearchSubscriptionsResponse: core.serialization.ObjectSchema<
    serializers.SearchSubscriptionsResponse.Raw,
    Square.SearchSubscriptionsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    subscriptions: core.serialization.list(Subscription).optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace SearchSubscriptionsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        subscriptions?: Subscription.Raw[] | null;
        cursor?: string | null;
    }
}
