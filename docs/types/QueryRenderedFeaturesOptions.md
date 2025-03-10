# Type alias: QueryRenderedFeaturesOptions

Ƭ **QueryRenderedFeaturesOptions**: `Object`

Options to pass to query the map for the rendered features

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `availableImages?` | `string`[] | An array of string representing the available images |
| `filter?` | `FilterSpecification` | A [filter] to limit query results. |
| `layers?` | `string`[] | An array of [style layer IDs](https://maps.vietmap.vn/docs/map-api/tilemap/#layer-id) for the query to inspect. Only features within these layers will be returned. If this parameter is undefined, all layers will be checked. |
| `validate?` | `boolean` | Whether to check if the [options.filter] conforms to the VietMap Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function. |

#### Defined in

src/source/query_features.ts:14
