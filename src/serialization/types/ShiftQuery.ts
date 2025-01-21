/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { ShiftFilter } from "./ShiftFilter";
import { ShiftSort } from "./ShiftSort";

export const ShiftQuery: core.serialization.ObjectSchema<serializers.ShiftQuery.Raw, Square.ShiftQuery> =
    core.serialization.object({
        filter: ShiftFilter.optional(),
        sort: ShiftSort.optional(),
    });

export declare namespace ShiftQuery {
    export interface Raw {
        filter?: ShiftFilter.Raw | null;
        sort?: ShiftSort.Raw | null;
    }
}
