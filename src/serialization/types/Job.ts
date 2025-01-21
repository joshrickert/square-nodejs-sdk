/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const Job: core.serialization.ObjectSchema<serializers.Job.Raw, Square.Job> = core.serialization.object({
    id: core.serialization.string().optional(),
    title: core.serialization.string().optionalNullable(),
    isTipEligible: core.serialization.property("is_tip_eligible", core.serialization.boolean().optionalNullable()),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    version: core.serialization.number().optional(),
});

export declare namespace Job {
    export interface Raw {
        id?: string | null;
        title?: (string | null) | null;
        is_tip_eligible?: (boolean | null) | null;
        created_at?: string | null;
        updated_at?: string | null;
        version?: number | null;
    }
}
