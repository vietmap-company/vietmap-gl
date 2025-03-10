# Type alias: QuerySourceFeatureOptions

Ƭ **QuerySourceFeatureOptions**: `Object`

The options object related to the [Map#querySourceFeatures](../classes/Map.md#querysourcefeatures) method

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `FilterSpecification` | A [filter] to limit query results. |
| `sourceLayer?` | `string` | The name of the source layer to query. *For vector tile sources, this parameter is required.* For GeoJSON sources, it is ignored. |
| `validate?` | `boolean` | Whether to check if the [parameters.filter] conforms to the VietMap Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function. **`Default Value`** ```ts true ``` |

#### Defined in

src/source/query_features.ts:37
