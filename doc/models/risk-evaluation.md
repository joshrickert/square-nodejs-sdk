
# Risk Evaluation

Represents fraud risk information for the associated payment.

When you take a payment through Square's Payments API (using the `CreatePayment`
endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
can use this information to determine the course of action (for example,
provide the goods/services or refund the payment).

## Structure

`RiskEvaluation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string \| undefined` | Optional | The timestamp when payment risk was evaluated, in RFC 3339 format. |
| `riskLevel` | [`string \| undefined`](../../doc/models/risk-evaluation-risk-level.md) | Optional | - |

## Example (as JSON)

```json
{
  "risk_level": null
}
```

