/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const VisibilityFilter: core.serialization.Schema<serializers.VisibilityFilter.Raw, Square.VisibilityFilter> =
    core.serialization.enum_(["ALL", "READ", "READ_WRITE"]);

export declare namespace VisibilityFilter {
    export type Raw = "ALL" | "READ" | "READ_WRITE";
}
