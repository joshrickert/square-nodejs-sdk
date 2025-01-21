/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response from updating an order custom attribute definition.
 */
export interface UpdateOrderCustomAttributeDefinitionResponse {
    /** The updated order custom attribute definition. */
    customAttributeDefinition?: Square.CustomAttributeDefinition;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
