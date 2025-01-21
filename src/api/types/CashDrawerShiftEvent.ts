/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface CashDrawerShiftEvent {
    /** The unique ID of the event. */
    id?: string;
    /**
     * The type of cash drawer shift event.
     * See [CashDrawerEventType](#type-cashdrawereventtype) for possible values
     */
    eventType?: Square.CashDrawerEventType;
    /**
     * The amount of money that was added to or removed from the cash drawer
     * in the event. The amount can be positive (for added money)
     * or zero (for other tender type payments). The addition or removal of money can be determined by
     * by the event type.
     */
    eventMoney?: Square.Money;
    /** The event time in RFC 3339 format. */
    createdAt?: string;
    /**
     * An optional description of the event, entered by the employee that
     * created the event.
     */
    description?: string | null;
    /** The ID of the team member that created the event. */
    teamMemberId?: string;
}
