/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const OrderServiceChargeCalculationPhase: core.serialization.Schema<
    serializers.OrderServiceChargeCalculationPhase.Raw,
    Square.OrderServiceChargeCalculationPhase
> = core.serialization.enum_([
    "SUBTOTAL_PHASE",
    "TOTAL_PHASE",
    "APPORTIONED_PERCENTAGE_PHASE",
    "APPORTIONED_AMOUNT_PHASE",
]);

export declare namespace OrderServiceChargeCalculationPhase {
    export type Raw = "SUBTOTAL_PHASE" | "TOTAL_PHASE" | "APPORTIONED_PERCENTAGE_PHASE" | "APPORTIONED_AMOUNT_PHASE";
}
