/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface GetCashDrawerShiftResponse {
    /** The cash drawer shift queried for. */
    cashDrawerShift?: Square.CashDrawerShift;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
