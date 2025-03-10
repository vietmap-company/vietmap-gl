# Class: RasterTileSource

A source containing raster tiles (See the [Style Specification] for detailed documentation of options.)

**`Example`**

```ts
map.addSource('raster-source', {
    'type': 'raster',
    'tiles': ['https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'],
    'tileSize': 256,
});
```

**`Example`**

```ts
map.addSource('wms-test-source', {
     'type': 'raster',
// use the tiles option to specify a WMS tile source URL
     'tiles': [
         'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
     ],
     'tileSize': 256
});
```

**`See`**

 - [Add a raster tile source](https://maps.vietmap.vn/docs/sdk-web-gl/map/example-map/style-map/)
 - [Add a WMS source]
 - [Display a satellite map](https://maps.vietmap.vn/docs/sdk-web-gl/map/example-map/style-map/)

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`RasterTileSource`**

  ↳↳ [`RasterDEMTileSource`](RasterDEMTileSource.md)

## Implements

- [`Source`](../interfaces/Source.md)

## Methods

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

▸ **off**(`type`, `listener`): [`RasterTileSource`](RasterTileSource.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`RasterTileSource`](RasterTileSource.md)

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

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`RasterTileSource`](RasterTileSource.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`RasterTileSource`](RasterTileSource.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`RasterTileSource`](RasterTileSource.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`RasterTileSource`](RasterTileSource.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### setTiles

▸ **setTiles**(`tiles`): `this`

Sets the source `tiles` property and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tiles` | `string`[] | An array of one or more tile source URLs, as in the raster tiles spec (See the [Style Specification] |

#### Returns

`this`

`this`

#### Defined in

src/source/raster_tile_source.ts:145

___

### setUrl

▸ **setUrl**(`url`): `this`

Sets the source `url` property and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | A URL to a TileJSON resource. Supported protocols are `http:` and `https:`. |

#### Returns

`this`

`this`

#### Defined in

src/source/raster_tile_source.ts:159
