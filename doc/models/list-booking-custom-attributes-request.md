
# List Booking Custom Attributes Request

Represents a [ListBookingCustomAttributes](../../doc/api/booking-custom-attributes.md#list-booking-custom-attributes) request.

## Structure

`ListBookingCustomAttributesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Optional | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>**Constraints**: `>= 1`, `<= 100` |
| `cursor` | `string \| undefined` | Optional | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `withDefinitions` | `boolean \| undefined` | Optional | Indicates whether to return the [custom attribute definition](../../doc/models/custom-attribute-definition.md) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`. |

## Example (as JSON)

```json
{
  "limit": null,
  "cursor": null,
  "with_definitions": null
}
```

