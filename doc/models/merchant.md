
# Merchant

Represents a business that sells with Square.

## Structure

`Merchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The Square-issued ID of the merchant. |
| `businessName` | `string \| undefined` | Optional | The name of the merchant's overall business. |
| `country` | [`string`](../../doc/models/country.md) | Required | Indicates the country associated with another entity, such as a business.<br>Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm). |
| `languageCode` | `string \| undefined` | Optional | The code indicating the [language preferences](https://developer.squareup.com/docs/build-basics/general-considerations/language-preferences) of the merchant, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). For example, `en-US` or `fr-CA`. |
| `currency` | [`string \| undefined`](../../doc/models/currency.md) | Optional | Indicates the associated currency for an amount of money. Values correspond<br>to [ISO 4217](https://wikipedia.org/wiki/ISO_4217). |
| `status` | [`string \| undefined`](../../doc/models/merchant-status.md) | Optional | - |
| `mainLocationId` | `string \| undefined` | Optional | The ID of the [main `Location`](https://developer.squareup.com/docs/locations-api#about-the-main-location) for this merchant. |
| `createdAt` | `string \| undefined` | Optional | The time when the merchant was created, in RFC 3339 format.<br>For more information, see [Working with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates). |

## Example (as JSON)

```json
{
  "id": null,
  "business_name": null,
  "country": "FO",
  "language_code": null,
  "currency": null,
  "status": null,
  "main_location_id": null
}
```

