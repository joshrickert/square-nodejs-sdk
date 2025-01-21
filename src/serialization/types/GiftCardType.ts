/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const GiftCardType: core.serialization.Schema<serializers.GiftCardType.Raw, Square.GiftCardType> =
    core.serialization.enum_(["PHYSICAL", "DIGITAL"]);

export declare namespace GiftCardType {
    export type Raw = "PHYSICAL" | "DIGITAL";
}
