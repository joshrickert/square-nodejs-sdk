/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { toJson } from "../../../../core/json";
import { Evidence } from "../resources/evidence/client/Client";

export declare namespace Disputes {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-02-20";
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
        version?: "2025-02-20";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Disputes {
    protected _evidence: Evidence | undefined;

    constructor(protected readonly _options: Disputes.Options = {}) {}

    public get evidence(): Evidence {
        return (this._evidence ??= new Evidence(this._options));
    }

    /**
     * Returns a list of disputes associated with a particular account.
     *
     * @param {Square.ListDisputesRequest} request
     * @param {Disputes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.disputes.list()
     */
    public async list(
        request: Square.ListDisputesRequest = {},
        requestOptions?: Disputes.RequestOptions,
    ): Promise<core.Page<Square.Dispute>> {
        const list = async (request: Square.ListDisputesRequest): Promise<Square.ListDisputesResponse> => {
            const { cursor, states, locationId } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (states !== undefined) {
                _queryParams["states"] = serializers.DisputeState.jsonOrThrow(states, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            if (locationId !== undefined) {
                _queryParams["location_id"] = locationId;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/disputes",
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "square",
                    "X-Fern-SDK-Version": "41.0.0",
                    "User-Agent": "square/41.0.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...requestOptions?.headers,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.ListDisputesResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/disputes.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListDisputesResponse, Square.Dispute>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.disputes ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Returns details about a specific dispute.
     *
     * @param {Square.GetDisputesRequest} request
     * @param {Disputes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.disputes.get({
     *         disputeId: "dispute_id"
     *     })
     */
    public async get(
        request: Square.GetDisputesRequest,
        requestOptions?: Disputes.RequestOptions,
    ): Promise<Square.GetDisputeResponse> {
        const { disputeId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/disputes/${encodeURIComponent(disputeId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetDisputeResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/disputes/{dispute_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
     * updates the dispute state to ACCEPTED.
     *
     * Square debits the disputed amount from the seller’s Square account. If the Square account
     * does not have sufficient funds, Square debits the associated bank account.
     *
     * @param {Square.AcceptDisputesRequest} request
     * @param {Disputes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.disputes.accept({
     *         disputeId: "dispute_id"
     *     })
     */
    public async accept(
        request: Square.AcceptDisputesRequest,
        requestOptions?: Disputes.RequestOptions,
    ): Promise<Square.AcceptDisputeResponse> {
        const { disputeId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/disputes/${encodeURIComponent(disputeId)}/accept`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AcceptDisputeResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/disputes/{dispute_id}/accept.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
     * multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.
     *
     * @param {Square.CreateEvidenceFileDisputesRequest} request
     * @param {Disputes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.disputes.createEvidenceFile({
     *         disputeId: "dispute_id"
     *     })
     */
    public async createEvidenceFile(
        request: Square.CreateEvidenceFileDisputesRequest,
        requestOptions?: Disputes.RequestOptions,
    ): Promise<Square.CreateDisputeEvidenceFileResponse> {
        const _request = await core.newFormData();
        if (request.request != null) {
            _request.append(
                "request",
                toJson(
                    serializers.CreateDisputeEvidenceFileRequest.jsonOrThrow(request.request, {
                        unrecognizedObjectKeys: "strip",
                        omitUndefined: true,
                    }),
                ),
            );
        }

        if (request.imageFile != null) {
            await _request.appendFile("image_file", request.imageFile);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/disputes/${encodeURIComponent(request.disputeId)}/evidence-files`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ..._maybeEncodedRequest.headers,
                ...requestOptions?.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateDisputeEvidenceFileResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/disputes/{dispute_id}/evidence-files.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Uploads text to use as evidence for a dispute challenge.
     *
     * @param {Square.CreateDisputeEvidenceTextRequest} request
     * @param {Disputes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.disputes.createEvidenceText({
     *         disputeId: "dispute_id",
     *         idempotencyKey: "ed3ee3933d946f1514d505d173c82648",
     *         evidenceType: "TRACKING_NUMBER",
     *         evidenceText: "1Z8888888888888888"
     *     })
     */
    public async createEvidenceText(
        request: Square.CreateDisputeEvidenceTextRequest,
        requestOptions?: Disputes.RequestOptions,
    ): Promise<Square.CreateDisputeEvidenceTextResponse> {
        const { disputeId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/disputes/${encodeURIComponent(disputeId)}/evidence-text`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateDisputeEvidenceTextRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateDisputeEvidenceTextResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/disputes/{dispute_id}/evidence-text.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Submits evidence to the cardholder's bank.
     *
     * The evidence submitted by this endpoint includes evidence uploaded
     * using the [CreateDisputeEvidenceFile](api-endpoint:Disputes-CreateDisputeEvidenceFile) and
     * [CreateDisputeEvidenceText](api-endpoint:Disputes-CreateDisputeEvidenceText) endpoints and
     * evidence automatically provided by Square, when available. Evidence cannot be removed from
     * a dispute after submission.
     *
     * @param {Square.SubmitEvidenceDisputesRequest} request
     * @param {Disputes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.disputes.submitEvidence({
     *         disputeId: "dispute_id"
     *     })
     */
    public async submitEvidence(
        request: Square.SubmitEvidenceDisputesRequest,
        requestOptions?: Disputes.RequestOptions,
    ): Promise<Square.SubmitEvidenceResponse> {
        const { disputeId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/disputes/${encodeURIComponent(disputeId)}/submit-evidence`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SubmitEvidenceResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/disputes/{dispute_id}/submit-evidence.",
                );
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
