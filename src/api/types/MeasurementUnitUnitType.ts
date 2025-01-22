/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum.
 */
export type MeasurementUnitUnitType =
    | "TYPE_CUSTOM"
    | "TYPE_AREA"
    | "TYPE_LENGTH"
    | "TYPE_VOLUME"
    | "TYPE_WEIGHT"
    | "TYPE_GENERIC";
export const MeasurementUnitUnitType = {
    TypeCustom: "TYPE_CUSTOM",
    TypeArea: "TYPE_AREA",
    TypeLength: "TYPE_LENGTH",
    TypeVolume: "TYPE_VOLUME",
    TypeWeight: "TYPE_WEIGHT",
    TypeGeneric: "TYPE_GENERIC",
} as const;
