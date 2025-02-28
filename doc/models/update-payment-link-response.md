
# Update Payment Link Response

## Structure

`UpdatePaymentLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred when updating the payment link. |
| `paymentLink` | [`PaymentLink \| undefined`](../../doc/models/payment-link.md) | Optional | - |

## Example (as JSON)

```json
{
  "payment_link": {
    "checkout_options": {
      "ask_for_shipping_address": true
    },
    "created_at": "2022-04-26T00:15:15Z",
    "id": "TY4BWEDJ6AI5MBIV",
    "order_id": "Qqc8ypQGvxVwc46Cch4zHTaJqc4F",
    "payment_note": "test",
    "updated_at": "2022-04-26T00:18:24Z",
    "url": "https://square.link/u/EXAMPLE",
    "version": 2
  }
}
```

