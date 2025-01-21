/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";
import { OrderServiceChargeCalculationPhase } from "./OrderServiceChargeCalculationPhase";
import { OrderLineItemAppliedTax } from "./OrderLineItemAppliedTax";
import { OrderServiceChargeType } from "./OrderServiceChargeType";
import { OrderServiceChargeTreatmentType } from "./OrderServiceChargeTreatmentType";
import { OrderServiceChargeScope } from "./OrderServiceChargeScope";

export const OrderServiceCharge: core.serialization.ObjectSchema<
    serializers.OrderServiceCharge.Raw,
    Square.OrderServiceCharge
> = core.serialization.object({
    uid: core.serialization.string().optionalNullable(),
    name: core.serialization.string().optionalNullable(),
    catalogObjectId: core.serialization.property("catalog_object_id", core.serialization.string().optionalNullable()),
    catalogVersion: core.serialization.property("catalog_version", core.serialization.bigint().optionalNullable()),
    percentage: core.serialization.string().optionalNullable(),
    amountMoney: core.serialization.property("amount_money", Money.optional()),
    appliedMoney: core.serialization.property("applied_money", Money.optional()),
    totalMoney: core.serialization.property("total_money", Money.optional()),
    totalTaxMoney: core.serialization.property("total_tax_money", Money.optional()),
    calculationPhase: core.serialization.property("calculation_phase", OrderServiceChargeCalculationPhase.optional()),
    taxable: core.serialization.boolean().optionalNullable(),
    appliedTaxes: core.serialization.property(
        "applied_taxes",
        core.serialization.list(OrderLineItemAppliedTax).optionalNullable(),
    ),
    metadata: core.serialization
        .record(core.serialization.string(), core.serialization.string().optionalNullable())
        .optionalNullable(),
    type: OrderServiceChargeType.optional(),
    treatmentType: core.serialization.property("treatment_type", OrderServiceChargeTreatmentType.optional()),
    scope: OrderServiceChargeScope.optional(),
});

export declare namespace OrderServiceCharge {
    export interface Raw {
        uid?: (string | null) | null;
        name?: (string | null) | null;
        catalog_object_id?: (string | null) | null;
        catalog_version?: ((bigint | number) | null) | null;
        percentage?: (string | null) | null;
        amount_money?: Money.Raw | null;
        applied_money?: Money.Raw | null;
        total_money?: Money.Raw | null;
        total_tax_money?: Money.Raw | null;
        calculation_phase?: OrderServiceChargeCalculationPhase.Raw | null;
        taxable?: (boolean | null) | null;
        applied_taxes?: (OrderLineItemAppliedTax.Raw[] | null) | null;
        metadata?: (Record<string, (string | null) | null | undefined> | null) | null;
        type?: OrderServiceChargeType.Raw | null;
        treatment_type?: OrderServiceChargeTreatmentType.Raw | null;
        scope?: OrderServiceChargeScope.Raw | null;
    }
}
