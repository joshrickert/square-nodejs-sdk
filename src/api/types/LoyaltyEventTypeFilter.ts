/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Filter events by event type.
 */
export interface LoyaltyEventTypeFilter {
    /**
     * The loyalty event types used to filter the result.
     * If multiple values are specified, the endpoint uses a
     * logical OR to combine them.
     * See [LoyaltyEventType](#type-loyaltyeventtype) for possible values
     */
    types: Square.LoyaltyEventType[];
}
