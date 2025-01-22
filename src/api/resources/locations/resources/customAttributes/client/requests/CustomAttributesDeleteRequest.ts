/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         locationId: "location_id",
 *         key: "key"
 *     }
 */
export interface CustomAttributesDeleteRequest {
    /**
     * The ID of the target [location](entity:Location).
     */
    locationId: string;
    /**
     * The key of the custom attribute to delete. This key must match the `key` of a custom
     * attribute definition in the Square seller account. If the requesting application is not the
     * definition owner, you must use the qualified key.
     */
    key: string;
}
