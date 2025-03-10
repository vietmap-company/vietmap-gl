# Type alias: GeoJSONSourceDiff

Ƭ **GeoJSONSourceDiff**: `Object`

The geojson source diff object

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `add?` | `GeoJSON.Feature`[] | An array of features to add |
| `remove?` | [`GeoJSONFeatureId`](GeoJSONFeatureId.md)[] | An array of features IDs to remove |
| `removeAll?` | `boolean` | When set to `true` it will remove all features |
| `update?` | [`GeoJSONFeatureDiff`](GeoJSONFeatureDiff.md)[] | An array of update objects |

#### Defined in

src/source/geojson_source_diff.ts:9
