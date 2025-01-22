/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         query: {
 *             loyaltyAccountId: "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd"
 *         },
 *         limit: 10
 *     }
 */
export interface SearchLoyaltyRewardsRequest {
    /**
     * The search criteria for the request.
     * If empty, the endpoint retrieves all loyalty rewards in the loyalty program.
     */
    query?: Square.SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
    /** The maximum number of results to return in the response. The default value is 30. */
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to
     * this endpoint. Provide this to retrieve the next set of
     * results for the original query.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
