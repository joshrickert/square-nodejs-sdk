/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A file to be uploaded as dispute evidence.
 */
export interface DisputeEvidenceFile {
    /** The file name including the file extension. For example: "receipt.tiff". */
    filename?: string | null;
    /** Dispute evidence files must be application/pdf, image/heic, image/heif, image/jpeg, image/png, or image/tiff formats. */
    filetype?: string | null;
}
