
# Bank Account Payment Details

Additional details about BANK_ACCOUNT type payments.

## Structure

`BankAccountPaymentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankName` | `string \| undefined` | Optional | The name of the bank associated with the bank account.<br>**Constraints**: *Maximum Length*: `100` |
| `transferType` | `string \| undefined` | Optional | The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.<br>**Constraints**: *Maximum Length*: `50` |
| `accountOwnershipType` | `string \| undefined` | Optional | The ownership type of the bank account performing the transfer.<br>The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.<br>**Constraints**: *Maximum Length*: `50` |
| `fingerprint` | `string \| undefined` | Optional | Uniquely identifies the bank account for this seller and can be used<br>to determine if payments are from the same bank account.<br>**Constraints**: *Maximum Length*: `255` |
| `country` | `string \| undefined` | Optional | The two-letter ISO code representing the country the bank account is located in.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `statementDescription` | `string \| undefined` | Optional | The statement description as sent to the bank.<br>**Constraints**: *Maximum Length*: `1000` |
| `achDetails` | [`ACHDetails \| undefined`](../../doc/models/ach-details.md) | Optional | ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |

## Example (as JSON)

```json
{
  "bank_name": null,
  "transfer_type": null,
  "account_ownership_type": null,
  "fingerprint": null,
  "country": null,
  "statement_description": null,
  "ach_details": null,
  "errors": null
}
```

