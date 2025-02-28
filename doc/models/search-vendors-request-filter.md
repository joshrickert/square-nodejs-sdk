
# Search Vendors Request Filter

Defines supported query expressions to search for vendors by.

## Structure

`SearchVendorsRequestFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string[] \| undefined` | Optional | The names of the [Vendor](../../doc/models/vendor.md) objects to retrieve. |
| `status` | [`string[] \| undefined`](../../doc/models/vendor-status.md) | Optional | The statuses of the [Vendor](../../doc/models/vendor.md) objects to retrieve.<br>See [VendorStatus](#type-vendorstatus) for possible values |

## Example (as JSON)

```json
{
  "name": null,
  "status": null
}
```

