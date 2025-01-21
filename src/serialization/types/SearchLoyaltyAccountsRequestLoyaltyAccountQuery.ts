/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LoyaltyAccountMapping } from "./LoyaltyAccountMapping";

export const SearchLoyaltyAccountsRequestLoyaltyAccountQuery: core.serialization.ObjectSchema<
    serializers.SearchLoyaltyAccountsRequestLoyaltyAccountQuery.Raw,
    Square.SearchLoyaltyAccountsRequestLoyaltyAccountQuery
> = core.serialization.object({
    mappings: core.serialization.list(LoyaltyAccountMapping).optionalNullable(),
    customerIds: core.serialization.property(
        "customer_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
});

export declare namespace SearchLoyaltyAccountsRequestLoyaltyAccountQuery {
    export interface Raw {
        mappings?: (LoyaltyAccountMapping.Raw[] | null) | null;
        customer_ids?: (string[] | null) | null;
    }
}
