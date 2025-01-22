/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LoyaltyEventLoyaltyAccountFilter } from "./LoyaltyEventLoyaltyAccountFilter";
import { LoyaltyEventTypeFilter } from "./LoyaltyEventTypeFilter";
import { LoyaltyEventDateTimeFilter } from "./LoyaltyEventDateTimeFilter";
import { LoyaltyEventLocationFilter } from "./LoyaltyEventLocationFilter";
import { LoyaltyEventOrderFilter } from "./LoyaltyEventOrderFilter";

export const LoyaltyEventFilter: core.serialization.ObjectSchema<
    serializers.LoyaltyEventFilter.Raw,
    Square.LoyaltyEventFilter
> = core.serialization.object({
    loyaltyAccountFilter: core.serialization.property(
        "loyalty_account_filter",
        LoyaltyEventLoyaltyAccountFilter.optional(),
    ),
    typeFilter: core.serialization.property("type_filter", LoyaltyEventTypeFilter.optional()),
    dateTimeFilter: core.serialization.property("date_time_filter", LoyaltyEventDateTimeFilter.optional()),
    locationFilter: core.serialization.property("location_filter", LoyaltyEventLocationFilter.optional()),
    orderFilter: core.serialization.property("order_filter", LoyaltyEventOrderFilter.optional()),
});

export declare namespace LoyaltyEventFilter {
    export interface Raw {
        loyalty_account_filter?: LoyaltyEventLoyaltyAccountFilter.Raw | null;
        type_filter?: LoyaltyEventTypeFilter.Raw | null;
        date_time_filter?: LoyaltyEventDateTimeFilter.Raw | null;
        location_filter?: LoyaltyEventLocationFilter.Raw | null;
        order_filter?: LoyaltyEventOrderFilter.Raw | null;
    }
}
