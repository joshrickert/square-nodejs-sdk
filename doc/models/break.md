
# Break

A record of an employee's break during a shift.

## Structure

`Break`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The UUID for this object. |
| `startAt` | `string` | Required | RFC 3339; follows the same timezone information as `Shift`. Precision up to<br>the minute is respected; seconds are truncated.<br>**Constraints**: *Minimum Length*: `1` |
| `endAt` | `string \| undefined` | Optional | RFC 3339; follows the same timezone information as `Shift`. Precision up to<br>the minute is respected; seconds are truncated. |
| `breakTypeId` | `string` | Required | The `BreakType` that this `Break` was templated on.<br>**Constraints**: *Minimum Length*: `1` |
| `name` | `string` | Required | A human-readable name.<br>**Constraints**: *Minimum Length*: `1` |
| `expectedDuration` | `string` | Required | Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of<br>the break.<br>**Constraints**: *Minimum Length*: `1` |
| `isPaid` | `boolean` | Required | Whether this break counts towards time worked for compensation<br>purposes. |

## Example (as JSON)

```json
{
  "id": null,
  "start_at": "start_at2",
  "end_at": null,
  "break_type_id": "break_type_id6",
  "name": "name0",
  "expected_duration": "expected_duration4",
  "is_paid": false
}
```

