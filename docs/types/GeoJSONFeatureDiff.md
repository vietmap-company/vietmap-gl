# Type alias: GeoJSONFeatureDiff

Ƭ **GeoJSONFeatureDiff**: `Object`

A geojson feature diff object

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addOrUpdateProperties?` | \{ `key`: `string` ; `value`: `any`  }[] | The properties to add or update along side their values |
| `id` | [`GeoJSONFeatureId`](GeoJSONFeatureId.md) | The feature ID |
| `newGeometry?` | `GeoJSON.Geometry` | If it's a new geometry, place it here |
| `removeAllProperties?` | `boolean` | Setting to `true` will remove all preperties |
| `removeProperties?` | `string`[] | The properties keys to remove |

#### Defined in

src/source/geojson_source_diff.ts:31
