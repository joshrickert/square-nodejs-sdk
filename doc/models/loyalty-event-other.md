
# Loyalty Event Other

Provides metadata when the event `type` is `OTHER`.

## Structure

`LoyaltyEventOther`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyProgramId` | `string` | Required | The Square-assigned ID of the [loyalty program](../../doc/models/loyalty-program.md).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `points` | `number` | Required | The number of points added or removed. |

## Example (as JSON)

```json
{
  "points": 236
}
```

