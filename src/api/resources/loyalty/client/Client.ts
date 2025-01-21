/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { Accounts } from "../resources/accounts/client/Client";
import { Programs } from "../resources/programs/client/Client";
import { Rewards } from "../resources/rewards/client/Client";

export declare namespace Loyalty {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-01-23";
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Square-Version header */
        version?: "2025-01-23";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Loyalty {
    protected _accounts: Accounts | undefined;
    protected _programs: Programs | undefined;
    protected _rewards: Rewards | undefined;

    constructor(protected readonly _options: Loyalty.Options = {}) {}

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }

    public get programs(): Programs {
        return (this._programs ??= new Programs(this._options));
    }

    public get rewards(): Rewards {
        return (this._rewards ??= new Rewards(this._options));
    }

    /**
     * Searches for loyalty events.
     *
     * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
     * buyer's loyalty account. Each change in the point balance
     * (for example, points earned, points redeemed, and points expired) is
     * recorded in the ledger. Using this endpoint, you can search the ledger for events.
     *
     * Search results are sorted by `created_at` in descending order.
     *
     * @param {Square.SearchLoyaltyEventsRequest} request
     * @param {Loyalty.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.loyalty.searchEvents({
     *         query: {
     *             filter: {
     *                 orderFilter: {
     *                     orderId: "PyATxhYLfsMqpVkcKJITPydgEYfZY"
     *                 }
     *             }
     *         },
     *         limit: 30
     *     })
     */
    public async searchEvents(
        request: Square.SearchLoyaltyEventsRequest = {},
        requestOptions?: Loyalty.RequestOptions,
    ): Promise<Square.SearchLoyaltyEventsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/loyalty/events/search",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-01-23",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "40.0.0",
                "User-Agent": "square/40.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SearchLoyaltyEventsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchLoyaltyEventsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/loyalty/events/search.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["SQUARE_TOKEN"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
