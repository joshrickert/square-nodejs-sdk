/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface DismissTerminalRefundResponse {
    /** Information on errors encountered during the request. */
    errors?: Square.Error_[];
    /** Current state of the refund to be dismissed. */
    refund?: Square.TerminalRefund;
}
