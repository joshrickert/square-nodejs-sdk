/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const TerminalActionActionType: core.serialization.Schema<
    serializers.TerminalActionActionType.Raw,
    Square.TerminalActionActionType
> = core.serialization.enum_([
    "QR_CODE",
    "PING",
    "SAVE_CARD",
    "SIGNATURE",
    "CONFIRMATION",
    "RECEIPT",
    "DATA_COLLECTION",
    "SELECT",
]);

export declare namespace TerminalActionActionType {
    export type Raw =
        | "QR_CODE"
        | "PING"
        | "SAVE_CARD"
        | "SIGNATURE"
        | "CONFIRMATION"
        | "RECEIPT"
        | "DATA_COLLECTION"
        | "SELECT";
}
