
# Fulfillment Shipment Details

Contains the details necessary to fulfill a shipment order.

## Structure

`FulfillmentShipmentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipient` | [`FulfillmentRecipient \| undefined`](../../doc/models/fulfillment-recipient.md) | Optional | Information about the fulfillment recipient. |
| `carrier` | `string \| undefined` | Optional | The shipping carrier being used to ship this fulfillment (such as UPS, FedEx, or USPS).<br>**Constraints**: *Maximum Length*: `50` |
| `shippingNote` | `string \| undefined` | Optional | A note with additional information for the shipping carrier.<br>**Constraints**: *Maximum Length*: `500` |
| `shippingType` | `string \| undefined` | Optional | A description of the type of shipping product purchased from the carrier<br>(such as First Class, Priority, or Express).<br>**Constraints**: *Maximum Length*: `50` |
| `trackingNumber` | `string \| undefined` | Optional | The reference number provided by the carrier to track the shipment's progress.<br>**Constraints**: *Maximum Length*: `100` |
| `trackingUrl` | `string \| undefined` | Optional | A link to the tracking webpage on the carrier's website.<br>**Constraints**: *Maximum Length*: `2000` |
| `placedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the shipment was requested. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). |
| `inProgressAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when this fulfillment was moved to the `RESERVED` state, which  indicates that preparation<br>of this shipment has begun. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `packagedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when this fulfillment was moved to the `PREPARED` state, which indicates that the<br>fulfillment is packaged. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `expectedShippedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the shipment is expected to be delivered to the shipping carrier.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `shippedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when this fulfillment was moved to the `COMPLETED` state, which indicates that<br>the fulfillment has been given to the shipping carrier. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). |
| `canceledAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating the shipment was canceled.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `cancelReason` | `string \| undefined` | Optional | A description of why the shipment was canceled.<br>**Constraints**: *Maximum Length*: `100` |
| `failedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the shipment failed to be completed. The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). |
| `failureReason` | `string \| undefined` | Optional | A description of why the shipment failed to be completed.<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "recipient": null,
  "carrier": null,
  "shipping_note": null,
  "shipping_type": null,
  "tracking_number": null,
  "tracking_url": null,
  "expected_shipped_at": null,
  "canceled_at": null,
  "cancel_reason": null,
  "failure_reason": null
}
```

