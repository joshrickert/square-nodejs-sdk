/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A tax applicable to an item.
 */
export interface CatalogTax {
    /** The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
    name?: string | null;
    /**
     * Whether the tax is calculated based on a payment's subtotal or total.
     * See [TaxCalculationPhase](#type-taxcalculationphase) for possible values
     */
    calculationPhase?: Square.TaxCalculationPhase;
    /**
     * Whether the tax is `ADDITIVE` or `INCLUSIVE`.
     * See [TaxInclusionType](#type-taxinclusiontype) for possible values
     */
    inclusionType?: Square.TaxInclusionType;
    /**
     * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
     * A value of `7.5` corresponds to 7.5%. For a location-specific tax rate, contact the tax authority of the location or a tax consultant.
     */
    percentage?: string | null;
    /**
     * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
     * app that are not associated with a particular `CatalogItem`.
     */
    appliesToCustomAmounts?: boolean | null;
    /** A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). */
    enabled?: boolean | null;
    /** The ID of a `CatalogProductSet` object. If set, the tax is applicable to all products in the product set. */
    appliesToProductSetId?: string | null;
}
