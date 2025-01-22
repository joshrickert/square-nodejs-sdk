/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A tax to block from applying to a line item. The tax must be
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 */
export interface OrderLineItemPricingBlocklistsBlockedTax {
    /** A unique ID of the `BlockedTax` within the order. */
    uid?: string | null;
    /**
     * The `uid` of the tax that should be blocked. Use this field to block
     * ad hoc taxes. For catalog, taxes use the `tax_catalog_object_id` field.
     */
    taxUid?: string | null;
    /**
     * The `catalog_object_id` of the tax that should be blocked.
     * Use this field to block catalog taxes. For ad hoc taxes, use the
     * `tax_uid` field.
     */
    taxCatalogObjectId?: string | null;
}
