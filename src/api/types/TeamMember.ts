/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A record representing an individual team member for a business.
 */
export interface TeamMember {
    /** The unique ID for the team member. */
    id?: string;
    /** A second ID used to associate the team member with an entity in another system. */
    referenceId?: string | null;
    /** Whether the team member is the owner of the Square account. */
    isOwner?: boolean;
    /**
     * Describes the status of the team member.
     * See [TeamMemberStatus](#type-teammemberstatus) for possible values
     */
    status?: Square.TeamMemberStatus;
    /** The given name (that is, the first name) associated with the team member. */
    givenName?: string | null;
    /** The family name (that is, the last name) associated with the team member. */
    familyName?: string | null;
    /**
     * The email address associated with the team member. After accepting the invitation
     * from Square, only the team member can change this value.
     */
    emailAddress?: string | null;
    /**
     * The team member's phone number, in E.164 format. For example:
     * +14155552671 - the country code is 1 for US
     * +551155256325 - the country code is 55 for BR
     */
    phoneNumber?: string | null;
    /** The timestamp when the team member was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the team member was last updated, in RFC 3339 format. */
    updatedAt?: string;
    /** Describes the team member's assigned locations. */
    assignedLocations?: Square.TeamMemberAssignedLocations;
    /** Information about the team member's overtime exemption status, job assignments, and compensation. */
    wageSetting?: Square.WageSetting;
}
