/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         siteId: "site_id",
 *         snippet: {
 *             content: "<script>var js = 1;</script>"
 *         }
 *     }
 */
export interface UpsertSnippetRequest {
    /**
     * The ID of the site where you want to add or update the snippet.
     */
    siteId: string;
    /** The snippet for the site. */
    snippet: Square.Snippet;
}
