/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { SignatureImage } from "./SignatureImage";

export const SignatureOptions: core.serialization.ObjectSchema<
    serializers.SignatureOptions.Raw,
    Square.SignatureOptions
> = core.serialization.object({
    title: core.serialization.string(),
    body: core.serialization.string(),
    signature: core.serialization.list(SignatureImage).optional(),
});

export declare namespace SignatureOptions {
    export interface Raw {
        title: string;
        body: string;
        signature?: SignatureImage.Raw[] | null;
    }
}
