/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a unit of measurement to use with a quantity, such as ounces
 * or inches. Exactly one of the following fields are required: `custom_unit`,
 * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
 */
export interface MeasurementUnit {
    /**
     * A custom unit of measurement defined by the seller using the Point of Sale
     * app or ad-hoc as an order line item.
     */
    customUnit?: Square.MeasurementUnitCustom;
    /**
     * Represents a standard area unit.
     * See [MeasurementUnitArea](#type-measurementunitarea) for possible values
     */
    areaUnit?: Square.MeasurementUnitArea;
    /**
     * Represents a standard length unit.
     * See [MeasurementUnitLength](#type-measurementunitlength) for possible values
     */
    lengthUnit?: Square.MeasurementUnitLength;
    /**
     * Represents a standard volume unit.
     * See [MeasurementUnitVolume](#type-measurementunitvolume) for possible values
     */
    volumeUnit?: Square.MeasurementUnitVolume;
    /**
     * Represents a standard unit of weight or mass.
     * See [MeasurementUnitWeight](#type-measurementunitweight) for possible values
     */
    weightUnit?: Square.MeasurementUnitWeight;
    /**
     * Reserved for API integrations that lack the ability to specify a real measurement unit
     * See [MeasurementUnitGeneric](#type-measurementunitgeneric) for possible values
     */
    genericUnit?: Square.MeasurementUnitGeneric;
    /**
     * Represents a standard unit of time.
     * See [MeasurementUnitTime](#type-measurementunittime) for possible values
     */
    timeUnit?: Square.MeasurementUnitTime;
    /**
     * Represents the type of the measurement unit.
     * See [MeasurementUnitUnitType](#type-measurementunitunittype) for possible values
     */
    type?: Square.MeasurementUnitUnitType;
}
