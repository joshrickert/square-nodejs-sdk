
# Invoice Accepted Payment Methods

The payment methods that customers can use to pay an [invoice](../../doc/models/invoice.md) on the Square-hosted invoice payment page.

## Structure

`InvoiceAcceptedPaymentMethods`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | `boolean \| undefined` | Optional | Indicates whether credit card or debit card payments are accepted. The default value is `false`. |
| `squareGiftCard` | `boolean \| undefined` | Optional | Indicates whether Square gift card payments are accepted. The default value is `false`. |
| `bankAccount` | `boolean \| undefined` | Optional | Indicates whether bank transfer payments are accepted. The default value is `false`.<br><br>This option is allowed only for invoices that have a single payment request of the `BALANCE` type. |
| `buyNowPayLater` | `boolean \| undefined` | Optional | Indicates whether Afterpay (also known as Clearpay) payments are accepted. The default value is `false`.<br><br>This option is allowed only for invoices that have a single payment request of the `BALANCE` type. This payment method is<br>supported if the seller account accepts Afterpay payments and the seller location is in a country where Afterpay<br>invoice payments are supported. As a best practice, consider enabling an additional payment method when allowing<br>`buy_now_pay_later` payments. For more information, including detailed requirements and processing limits, see<br>[Buy Now Pay Later payments with Afterpay](https://developer.squareup.com/docs/invoices-api/overview#buy-now-pay-later). |

## Example (as JSON)

```json
{
  "card": null,
  "square_gift_card": null,
  "bank_account": null,
  "buy_now_pay_later": null
}
```

