/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         catalogObjectId: "catalog_object_id"
 *     }
 */
export interface InventoryChangesRequest {
    /**
     * ID of the [CatalogObject](entity:CatalogObject) to retrieve.
     */
    catalogObjectId: string;
    /**
     * The [Location](entity:Location) IDs to look up as a comma-separated
     * list. An empty list queries all locations.
     */
    locationIds?: string | null;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string | null;
}
