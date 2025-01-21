/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         disputeId: "dispute_id",
 *         evidenceId: "evidence_id"
 *     }
 */
export interface EvidenceDeleteRequest {
    /**
     * The ID of the dispute from which you want to remove evidence.
     */
    disputeId: string;
    /**
     * The ID of the evidence you want to remove.
     */
    evidenceId: string;
}
