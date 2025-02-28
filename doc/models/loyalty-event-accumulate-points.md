
# Loyalty Event Accumulate Points

Provides metadata when the event `type` is `ACCUMULATE_POINTS`.

## Structure

`LoyaltyEventAccumulatePoints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyProgramId` | `string \| undefined` | Optional | The ID of the [loyalty program](../../doc/models/loyalty-program.md).<br>**Constraints**: *Maximum Length*: `36` |
| `points` | `number \| undefined` | Optional | The number of points accumulated by the event.<br>**Constraints**: `>= 1` |
| `orderId` | `string \| undefined` | Optional | The ID of the [order](../../doc/models/order.md) for which the buyer accumulated the points.<br>This field is returned only if the Orders API is used to process orders. |

## Example (as JSON)

```json
{
  "points": null,
  "order_id": null
}
```

