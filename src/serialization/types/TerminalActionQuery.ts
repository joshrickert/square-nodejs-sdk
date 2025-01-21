/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TerminalActionQueryFilter } from "./TerminalActionQueryFilter";
import { TerminalActionQuerySort } from "./TerminalActionQuerySort";

export const TerminalActionQuery: core.serialization.ObjectSchema<
    serializers.TerminalActionQuery.Raw,
    Square.TerminalActionQuery
> = core.serialization.object({
    filter: TerminalActionQueryFilter.optional(),
    sort: TerminalActionQuerySort.optional(),
});

export declare namespace TerminalActionQuery {
    export interface Raw {
        filter?: TerminalActionQueryFilter.Raw | null;
        sort?: TerminalActionQuerySort.Raw | null;
    }
}
