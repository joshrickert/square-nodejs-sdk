/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface CreateCatalogImageResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /**
     * The newly created `CatalogImage` including a Square-generated
     * URL for the encapsulated image file.
     */
    image?: Square.CatalogObject;
}
