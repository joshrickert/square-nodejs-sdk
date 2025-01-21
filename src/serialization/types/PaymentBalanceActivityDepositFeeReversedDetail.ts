/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const PaymentBalanceActivityDepositFeeReversedDetail: core.serialization.ObjectSchema<
    serializers.PaymentBalanceActivityDepositFeeReversedDetail.Raw,
    Square.PaymentBalanceActivityDepositFeeReversedDetail
> = core.serialization.object({
    payoutId: core.serialization.property("payout_id", core.serialization.string().optionalNullable()),
});

export declare namespace PaymentBalanceActivityDepositFeeReversedDetail {
    export interface Raw {
        payout_id?: (string | null) | null;
    }
}
