
# Catalog Pricing Rule

Defines how discounts are automatically applied to a set of items that match the pricing rule
during the active time period.

## Structure

`CatalogPricingRule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | User-defined name for the pricing rule. For example, "Buy one get one<br>free" or "10% off". |
| `timePeriodIds` | `string[] \| undefined` | Optional | A list of unique IDs for the catalog time periods when<br>this pricing rule is in effect. If left unset, the pricing rule is always<br>in effect. |
| `discountId` | `string \| undefined` | Optional | Unique ID for the `CatalogDiscount` to take off<br>the price of all matched items. |
| `matchProductsId` | `string \| undefined` | Optional | Unique ID for the `CatalogProductSet` that will be matched by this rule. A match rule<br>matches within the entire cart, and can match multiple times. This field will always be set. |
| `applyProductsId` | `string \| undefined` | Optional | __Deprecated__: Please use the `exclude_products_id` field to apply<br>an exclude set instead. Exclude sets allow better control over quantity<br>ranges and offer more flexibility for which matched items receive a discount.<br><br>`CatalogProductSet` to apply the pricing to.<br>An apply rule matches within the subset of the cart that fits the match rules (the match set).<br>An apply rule can only match once in the match set.<br>If not supplied, the pricing will be applied to all products in the match set.<br>Other products retain their base price, or a price generated by other rules. |
| `excludeProductsId` | `string \| undefined` | Optional | `CatalogProductSet` to exclude from the pricing rule.<br>An exclude rule matches within the subset of the cart that fits the match rules (the match set).<br>An exclude rule can only match once in the match set.<br>If not supplied, the pricing will be applied to all products in the match set.<br>Other products retain their base price, or a price generated by other rules. |
| `validFromDate` | `string \| undefined` | Optional | Represents the date the Pricing Rule is valid from. Represented in RFC 3339 full-date format (YYYY-MM-DD). |
| `validFromLocalTime` | `string \| undefined` | Optional | Represents the local time the pricing rule should be valid from. Represented in RFC 3339 partial-time format<br>(HH:MM:SS). Partial seconds will be truncated. |
| `validUntilDate` | `string \| undefined` | Optional | Represents the date the Pricing Rule is valid until. Represented in RFC 3339 full-date format (YYYY-MM-DD). |
| `validUntilLocalTime` | `string \| undefined` | Optional | Represents the local time the pricing rule should be valid until. Represented in RFC 3339 partial-time format<br>(HH:MM:SS). Partial seconds will be truncated. |
| `excludeStrategy` | [`string \| undefined`](../../doc/models/exclude-strategy.md) | Optional | Indicates which products matched by a CatalogPricingRule<br>will be excluded if the pricing rule uses an exclude set. |
| `minimumOrderSubtotalMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `customerGroupIdsAny` | `string[] \| undefined` | Optional | A list of IDs of customer groups, the members of which are eligible for discounts specified in this pricing rule.<br>Notice that a group ID is generated by the Customers API.<br>If this field is not set, the specified discount applies to matched products sold to anyone whether the buyer<br>has a customer profile created or not. If this `customer_group_ids_any` field is set, the specified discount<br>applies only to matched products sold to customers belonging to the specified customer groups. |

## Example (as JSON)

```json
{
  "name": null,
  "time_period_ids": null,
  "discount_id": null,
  "match_products_id": null,
  "apply_products_id": null,
  "exclude_products_id": null,
  "valid_from_date": null,
  "valid_from_local_time": null,
  "valid_until_date": null,
  "valid_until_local_time": null,
  "exclude_strategy": null,
  "minimum_order_subtotal_money": null,
  "customer_group_ids_any": null
}
```

