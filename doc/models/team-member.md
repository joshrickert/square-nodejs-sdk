
# Team Member

A record representing an individual team member for a business.

## Structure

`TeamMember`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique ID for the team member. |
| `referenceId` | `string \| undefined` | Optional | A second ID used to associate the team member with an entity in another system. |
| `isOwner` | `boolean \| undefined` | Optional | Whether the team member is the owner of the Square account. |
| `status` | [`string \| undefined`](../../doc/models/team-member-status.md) | Optional | Enumerates the possible statuses the team member can have within a business. |
| `givenName` | `string \| undefined` | Optional | The given name (that is, the first name) associated with the team member. |
| `familyName` | `string \| undefined` | Optional | The family name (that is, the last name) associated with the team member. |
| `emailAddress` | `string \| undefined` | Optional | The email address associated with the team member. |
| `phoneNumber` | `string \| undefined` | Optional | The team member's phone number, in E.164 format. For example:<br>+14155552671 - the country code is 1 for US<br>+551155256325 - the country code is 55 for BR |
| `createdAt` | `string \| undefined` | Optional | The timestamp, in RFC 3339 format, describing when the team member was created.<br>For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z". |
| `updatedAt` | `string \| undefined` | Optional | The timestamp, in RFC 3339 format, describing when the team member was last updated.<br>For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z". |
| `assignedLocations` | [`TeamMemberAssignedLocations \| undefined`](../../doc/models/team-member-assigned-locations.md) | Optional | An object that represents a team member's assignment to locations. |

## Example (as JSON)

```json
{
  "reference_id": null,
  "status": null,
  "given_name": null,
  "family_name": null,
  "email_address": null,
  "phone_number": null,
  "assigned_locations": null
}
```

