/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { SelectOption } from "./SelectOption";

export const SelectOptions: core.serialization.ObjectSchema<serializers.SelectOptions.Raw, Square.SelectOptions> =
    core.serialization.object({
        title: core.serialization.string(),
        body: core.serialization.string(),
        options: core.serialization.list(SelectOption),
        selectedOption: core.serialization.property("selected_option", SelectOption.optional()),
    });

export declare namespace SelectOptions {
    export interface Raw {
        title: string;
        body: string;
        options: SelectOption.Raw[];
        selected_option?: SelectOption.Raw | null;
    }
}
