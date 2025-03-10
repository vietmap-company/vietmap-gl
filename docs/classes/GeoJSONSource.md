# Class: GeoJSONSource

A source containing GeoJSON.
(See the [Style Specification](https://maps.vietmap.vn/docs/map-api/tilemap/#sources-geojson) for detailed documentation of options.)

**`Example`**

```ts
map.addSource('some id', {
    type: 'geojson',
    data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
});
```

**`Example`**

```ts
map.addSource('some id', {
   type: 'geojson',
   data: {
       "type": "FeatureCollection",
       "features": [{
           "type": "Feature",
           "properties": {},
           "geometry": {
               "type": "Point",
               "coordinates": [
                   10.53063297271729,
                   106.18174077994108
               ]
           }
       }]
   }
});
```

**`Example`**

```ts
map.getSource('some id').setData({
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": { "name": "Null Island" },
      "geometry": {
          "type": "Point",
          "coordinates": [ 0, 0 ]
      }
  }]
});
```

**`See`**

 - [Draw GeoJSON points]
 - [Add a GeoJSON line]
 - [Create a heatmap from points]
 - [Create and style clusters](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/)

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`GeoJSONSource`**

## Implements

- [`Source`](../interfaces/Source.md)

## Methods

### \_updateWorkerData

▸ **_updateWorkerData**(`diff?`): `Promise`\<`void`\>

Responsible for invoking WorkerSource's geojson.loadData target, which
handles loading the geojson data and preparing to serve it up as tiles,
using geojson-vt or supercluster as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `diff?` | [`GeoJSONSourceDiff`](../types/GeoJSONSourceDiff.md) | the diff object |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/source/geojson_source.ts:318

___

### getClusterChildren

▸ **getClusterChildren**(`clusterId`): `Promise`\<`Feature`\<`Geometry`, \{ `[name: string]`: `any`;  }\>[]\>

For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clusterId` | `number` | The value of the cluster's `cluster_id` property. |

#### Returns

`Promise`\<`Feature`\<`Geometry`, \{ `[name: string]`: `any`;  }\>[]\>

a promise that is resolved when the features are retrieved

#### Defined in

src/source/geojson_source.ts:273

___

### getClusterExpansionZoom

▸ **getClusterExpansionZoom**(`clusterId`): `Promise`\<`number`\>

For clustered sources, fetches the zoom at which the given cluster expands.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clusterId` | `number` | The value of the cluster's `cluster_id` property. |

#### Returns

`Promise`\<`number`\>

a promise that is resolved with the zoom number

#### Defined in

src/source/geojson_source.ts:263

___

### getClusterLeaves

▸ **getClusterLeaves**(`clusterId`, `limit`, `offset`): `Promise`\<`Feature`\<`Geometry`, \{ `[name: string]`: `any`;  }\>[]\>

For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clusterId` | `number` | The value of the cluster's `cluster_id` property. |
| `limit` | `number` | The maximum number of features to return. |
| `offset` | `number` | The number of features to skip (e.g. for pagination). |

#### Returns

`Promise`\<`Feature`\<`Geometry`, \{ `[name: string]`: `any`;  }\>[]\>

a promise that is resolved when the features are retreived

**`Example`**

Retrieve cluster leaves on click
```ts
map.on('click', 'clusters', (e) => {
  let features = map.queryRenderedFeatures(e.point, {
    layers: ['clusters']
  });

  let clusterId = features[0].properties.cluster_id;
  let pointCount = features[0].properties.point_count;
  let clusterSource = map.getSource('clusters');

  const features = await clusterSource.getClusterLeaves(clusterId, pointCount) 0, function(error, features) {
  // Print cluster leaves in the console
  console.log('Cluster leaves:', features);
});
```

#### Defined in

src/source/geojson_source.ts:302

___

### listens

▸ **listens**(`type`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type |

#### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

#### Inherited from

[Evented](Evented.md).[listens](Evented.md#listens)

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`GeoJSONSource`](GeoJSONSource.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`GeoJSONSource`](GeoJSONSource.md)

`this`

#### Inherited from

[Evented](Evented.md).[off](Evented.md#off)

#### Defined in

src/util/evented.ts:88

___

### on

▸ **on**(`type`, `listener`): `this`

Adds a listener to a specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

#### Returns

`this`

`this`

#### Inherited from

[Evented](Evented.md).[on](Evented.md#on)

#### Defined in

src/util/evented.ts:74

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`GeoJSONSource`](GeoJSONSource.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`GeoJSONSource`](GeoJSONSource.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### setClusterOptions

▸ **setClusterOptions**(`options`): `this`

To disable/enable clustering on the source options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SetClusterOptions`](../types/SetClusterOptions.md) | The options to set |

#### Returns

`this`

`this`

**`Example`**

```ts
map.getSource('some id').setClusterOptions({cluster: false});
map.getSource('some id').setClusterOptions({cluster: false, clusterRadius: 50, clusterMaxZoom: 14});
```

#### Defined in

src/source/geojson_source.ts:247

___

### setData

▸ **setData**(`data`): `this`

Sets the GeoJSON data and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `GeoJSON`\<`Geometry`, \{ `[name: string]`: `any`;  }\> | A GeoJSON data object or a URL to one. The latter is preferable in the case of large GeoJSON files. |

#### Returns

`this`

`this`

#### Defined in

src/source/geojson_source.ts:209

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`GeoJSONSource`](GeoJSONSource.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`GeoJSONSource`](GeoJSONSource.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### updateData

▸ **updateData**(`diff`): `this`

Updates the source's GeoJSON, and re-renders the map.

For sources with lots of features, this method can be used to make updates more quickly.

This approach requires unique IDs for every feature in the source. The IDs can either be specified on the feature,
or by using the promoteId option to specify which property should be used as the ID.

It is an error to call updateData on a source that did not have unique IDs for each of its features already.

Updates are applied on a best-effort basis, updating an ID that does not exist will not result in an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `diff` | [`GeoJSONSourceDiff`](../types/GeoJSONSourceDiff.md) | The changes that need to be applied. |

#### Returns

`this`

`this`

#### Defined in

src/source/geojson_source.ts:231
