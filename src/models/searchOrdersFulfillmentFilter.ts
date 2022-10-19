import { array, object, optional, Schema, string } from '../schema';

/** Filter based on [order fulfillment]($m/Fulfillment) information. */
export interface SearchOrdersFulfillmentFilter {
  /**
   * A list of [fulfillment types]($m/FulfillmentType) to filter
   * for. The list returns orders if any of its fulfillments match any of the fulfillment types
   * listed in this field.
   * See [FulfillmentType](#type-fulfillmenttype) for possible values
   */
  fulfillmentTypes?: string[];
  /**
   * A list of [fulfillment states]($m/FulfillmentState) to filter
   * for. The list returns orders if any of its fulfillments match any of the
   * fulfillment states listed in this field.
   * See [FulfillmentState](#type-fulfillmentstate) for possible values
   */
  fulfillmentStates?: string[];
}

export const searchOrdersFulfillmentFilterSchema: Schema<SearchOrdersFulfillmentFilter> = object(
  {
    fulfillmentTypes: ['fulfillment_types', optional(array(string()))],
    fulfillmentStates: ['fulfillment_states', optional(array(string()))],
  }
);
