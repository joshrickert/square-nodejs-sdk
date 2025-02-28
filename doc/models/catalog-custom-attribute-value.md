
# Catalog Custom Attribute Value

An instance of a custom attribute. Custom attributes can be defined and
added to `ITEM` and `ITEM_VARIATION` type catalog objects.
[Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).

## Structure

`CatalogCustomAttributeValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the custom attribute. |
| `stringValue` | `string \| undefined` | Optional | The string value of the custom attribute.  Populated if `type` = `STRING`. |
| `customAttributeDefinitionId` | `string \| undefined` | Optional | The id of the [CatalogCustomAttributeDefinition](../../doc/models/catalog-custom-attribute-definition.md) this value belongs to. |
| `type` | [`string \| undefined`](../../doc/models/catalog-custom-attribute-definition-type.md) | Optional | Defines the possible types for a custom attribute. |
| `numberValue` | `string \| undefined` | Optional | Populated if `type` = `NUMBER`. Contains a string<br>representation of a decimal number, using a `.` as the decimal separator. |
| `booleanValue` | `boolean \| undefined` | Optional | A `true` or `false` value. Populated if `type` = `BOOLEAN`. |
| `selectionUidValues` | `string[] \| undefined` | Optional | One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`. |
| `key` | `string \| undefined` | Optional | A copy of key from the associated `CatalogCustomAttributeDefinition`. |

## Example (as JSON)

```json
{
  "name": null,
  "string_value": null,
  "type": null,
  "number_value": null,
  "boolean_value": null,
  "selection_uid_values": null
}
```

