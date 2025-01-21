/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { InvoiceFilter } from "./InvoiceFilter";
import { InvoiceSort } from "./InvoiceSort";

export const InvoiceQuery: core.serialization.ObjectSchema<serializers.InvoiceQuery.Raw, Square.InvoiceQuery> =
    core.serialization.object({
        filter: InvoiceFilter,
        sort: InvoiceSort.optional(),
    });

export declare namespace InvoiceQuery {
    export interface Raw {
        filter: InvoiceFilter.Raw;
        sort?: InvoiceSort.Raw | null;
    }
}
