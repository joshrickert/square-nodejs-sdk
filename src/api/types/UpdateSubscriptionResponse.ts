/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines output parameters in a response from the
 * [UpdateSubscription](api-endpoint:Subscriptions-UpdateSubscription) endpoint.
 */
export interface UpdateSubscriptionResponse {
    /** Errors encountered during the request. */
    errors?: Square.Error_[];
    /** The updated subscription. */
    subscription?: Square.Subscription;
}
