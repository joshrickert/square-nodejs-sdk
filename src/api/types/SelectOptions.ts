/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface SelectOptions {
    /** The title text to display in the select flow on the Terminal. */
    title: string;
    /** The body text to display in the select flow on the Terminal. */
    body: string;
    /** Represents the buttons/options that should be displayed in the select flow on the Terminal. */
    options: Square.SelectOption[];
    /** The buyer’s selected option. */
    selectedOption?: Square.SelectOption;
}
