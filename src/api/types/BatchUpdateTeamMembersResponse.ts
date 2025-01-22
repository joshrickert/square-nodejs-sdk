/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response from a bulk update request containing the updated `TeamMember` objects or error messages.
 */
export interface BatchUpdateTeamMembersResponse {
    /** The successfully updated `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`. */
    teamMembers?: Record<string, Square.UpdateTeamMemberResponse>;
    /** The errors that occurred during the request. */
    errors?: Square.Error_[];
}
