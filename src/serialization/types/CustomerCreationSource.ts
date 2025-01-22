/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CustomerCreationSource: core.serialization.Schema<
    serializers.CustomerCreationSource.Raw,
    Square.CustomerCreationSource
> = core.serialization.enum_([
    "OTHER",
    "APPOINTMENTS",
    "COUPON",
    "DELETION_RECOVERY",
    "DIRECTORY",
    "EGIFTING",
    "EMAIL_COLLECTION",
    "FEEDBACK",
    "IMPORT",
    "INVOICES",
    "LOYALTY",
    "MARKETING",
    "MERGE",
    "ONLINE_STORE",
    "INSTANT_PROFILE",
    "TERMINAL",
    "THIRD_PARTY",
    "THIRD_PARTY_IMPORT",
    "UNMERGE_RECOVERY",
]);

export declare namespace CustomerCreationSource {
    export type Raw =
        | "OTHER"
        | "APPOINTMENTS"
        | "COUPON"
        | "DELETION_RECOVERY"
        | "DIRECTORY"
        | "EGIFTING"
        | "EMAIL_COLLECTION"
        | "FEEDBACK"
        | "IMPORT"
        | "INVOICES"
        | "LOYALTY"
        | "MARKETING"
        | "MERGE"
        | "ONLINE_STORE"
        | "INSTANT_PROFILE"
        | "TERMINAL"
        | "THIRD_PARTY"
        | "THIRD_PARTY_IMPORT"
        | "UNMERGE_RECOVERY";
}
