/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         key: "key"
 *     }
 */
export interface CustomAttributeDefinitionsGetRequest {
    /**
     * The key of the custom attribute definition to retrieve. If the requesting application
     * is not the definition owner, you must use the qualified key.
     */
    key: string;
    /**
     * The current version of the custom attribute definition, which is used for strongly consistent
     * reads to guarantee that you receive the most up-to-date data. When included in the request,
     * Square returns the specified version or a higher version if one exists. If the specified version
     * is higher than the current version, Square returns a `BAD_REQUEST` error.
     */
    version?: number | null;
}
