/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const EventMetadata: core.serialization.ObjectSchema<serializers.EventMetadata.Raw, Square.EventMetadata> =
    core.serialization.object({
        eventId: core.serialization.property("event_id", core.serialization.string().optionalNullable()),
        apiVersion: core.serialization.property("api_version", core.serialization.string().optionalNullable()),
    });

export declare namespace EventMetadata {
    export interface Raw {
        event_id?: (string | null) | null;
        api_version?: (string | null) | null;
    }
}
