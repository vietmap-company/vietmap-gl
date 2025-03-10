# Class: RasterDEMTileSource

A source containing raster DEM tiles (See the [Style Specification] for detailed documentation of options.)
This source can be used to show hillshading and 3D terrain

**`Example`**

```ts
map.addSource('raster-dem-source', {
     type: 'raster-dem',
     url: 'https://maps.vietmap.vn/api/terrain-tiles/tiles.json',
     tileSize: 256
});
```

**`See`**

[3D Terrain]

## Hierarchy

- [`RasterTileSource`](RasterTileSource.md)

  ↳ **`RasterDEMTileSource`**

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

[RasterTileSource](RasterTileSource.md).[listens](RasterTileSource.md#listens)

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`RasterDEMTileSource`](RasterDEMTileSource.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`RasterDEMTileSource`](RasterDEMTileSource.md)

`this`

#### Inherited from

[RasterTileSource](RasterTileSource.md).[off](RasterTileSource.md#off)

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

[RasterTileSource](RasterTileSource.md).[on](RasterTileSource.md#on)

#### Defined in

src/util/evented.ts:74

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`RasterDEMTileSource`](RasterDEMTileSource.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`RasterDEMTileSource`](RasterDEMTileSource.md)

`this` or a promise if a listener is not provided

#### Inherited from

[RasterTileSource](RasterTileSource.md).[once](RasterTileSource.md#once)

#### Defined in

src/util/evented.ts:104

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`RasterDEMTileSource`](RasterDEMTileSource.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`RasterDEMTileSource`](RasterDEMTileSource.md)

`this`

#### Inherited from

[RasterTileSource](RasterTileSource.md).[setEventedParent](RasterTileSource.md#seteventedparent)

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

#### Inherited from

[RasterTileSource](RasterTileSource.md).[setTiles](RasterTileSource.md#settiles)

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

#### Inherited from

[RasterTileSource](RasterTileSource.md).[setUrl](RasterTileSource.md#seturl)

#### Defined in

src/source/raster_tile_source.ts:159
