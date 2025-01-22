/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         customAttributeDefinition: {
 *             key: "cover-count",
 *             schema: {
 *                 "ref": "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.Number"
 *             },
 *             name: "Cover count",
 *             description: "The number of people seated at a table",
 *             visibility: "VISIBILITY_READ_WRITE_VALUES"
 *         },
 *         idempotencyKey: "IDEMPOTENCY_KEY"
 *     }
 */
export interface CreateOrderCustomAttributeDefinitionRequest {
    /**
     * The custom attribute definition to create. Note the following:
     * - With the exception of the `Selection` data type, the `schema` is specified as a simple URL to the JSON schema
     * definition hosted on the Square CDN. For more information, including supported values and constraints, see
     * [Specifying the schema](https://developer.squareup.com/docs/customer-custom-attributes-api/custom-attribute-definitions#specify-schema).
     * - If provided, `name` must be unique (case-sensitive) across all visible customer-related custom attribute definitions for the seller.
     * - All custom attributes are visible in exported customer data, including those set to `VISIBILITY_HIDDEN`.
     */
    customAttributeDefinition: Square.CustomAttributeDefinition;
    /**
     * A unique identifier for this request, used to ensure idempotency.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string;
}
