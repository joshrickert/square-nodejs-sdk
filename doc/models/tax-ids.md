
# Tax Ids

Identifiers for the location used by various governments for tax purposes.

## Structure

`TaxIds`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `euVat` | `string \| undefined` | Optional | The EU VAT number for this location. For example, `IE3426675K`.<br>If the EU VAT number is present, it is well-formed and has been<br>validated with VIES, the VAT Information Exchange System. |
| `frSiret` | `string \| undefined` | Optional | The SIRET (Système d'Identification du Répertoire des Entreprises et de leurs Etablissements)<br>number is a 14-digit code issued by the French INSEE. For example, `39922799000021`. |
| `frNaf` | `string \| undefined` | Optional | The French government uses the NAF (Nomenclature des Activités Françaises) to display and<br>track economic statistical data. This is also called the APE (Activite Principale de l’Entreprise) code.<br>For example, `6910Z`. |
| `esNif` | `string \| undefined` | Optional | The NIF (Numero de Identificacion Fiscal) number is a nine-character tax identifier used in Spain.<br>If it is present, it has been validated. For example, `73628495A`. |

## Example (as JSON)

```json
{
  "eu_vat": null,
  "fr_siret": null,
  "fr_naf": null,
  "es_nif": null
}
```

