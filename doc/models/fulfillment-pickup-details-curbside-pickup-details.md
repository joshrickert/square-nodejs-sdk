
# Fulfillment Pickup Details Curbside Pickup Details

Specific details for curbside pickup.

## Structure

`FulfillmentPickupDetailsCurbsidePickupDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `curbsideDetails` | `string \| undefined` | Optional | Specific details for curbside pickup, such as parking number and vehicle model.<br>**Constraints**: *Maximum Length*: `250` |
| `buyerArrivedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). |

## Example (as JSON)

```json
{
  "curbside_details": null,
  "buyer_arrived_at": null
}
```

