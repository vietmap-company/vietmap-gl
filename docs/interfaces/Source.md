# Interface: Source

The `Source` interface must be implemented by each source type, including "core" types (`vector`, `raster`,
`video`, etc.) and all custom, third-party types.

 `data` - Fired with `{dataType: 'source', sourceDataType: 'metadata'}` to indicate that any necessary metadata
has been loaded so that it's okay to call `loadTile`; and with `{dataType: 'source', sourceDataType: 'content'}`
to indicate that the source data has changed, so that any current caches should be flushed.

## Implemented by

- [`GeoJSONSource`](../classes/GeoJSONSource.md)
- [`ImageSource`](../classes/ImageSource.md)
- [`RasterDEMTileSource`](../classes/RasterDEMTileSource.md)
- [`RasterTileSource`](../classes/RasterTileSource.md)
- [`VectorTileSource`](../classes/VectorTileSource.md)

## Methods

### abortTile

▸ **abortTile**(`tile`): `Promise`\<`void`\>

Allows to abort a tile loading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tile` | [`Tile`](../classes/Tile.md) | The tile to abort |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/source/source.ts:103

___

### fire

▸ **fire**(`event`): `unknown`

An ability to fire an event to all the listeners, see [Evented](../classes/Evented.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`Event`](../classes/Event.md) | The event to fire |

#### Returns

`unknown`

#### Defined in

src/source/source.ts:77

___

### hasTile

▸ **hasTile**(`tileID`): `boolean`

True is the tile is part of the source, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tileID` | [`OverscaledTileID`](../classes/OverscaledTileID.md) | The tile ID |

#### Returns

`boolean`

#### Defined in

src/source/source.ts:98

___

### hasTransition

▸ **hasTransition**(): `boolean`

True if the source has transiotion, false otherwise.

#### Returns

`boolean`

#### Defined in

src/source/source.ts:68

___

### loadTile

▸ **loadTile**(`tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tile` | [`Tile`](../classes/Tile.md) | The tile to load |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/source/source.ts:93

___

### loaded

▸ **loaded**(): `boolean`

True if the source is loaded, false otherwise.

#### Returns

`boolean`

#### Defined in

src/source/source.ts:72

___

### onAdd

▸ **onAdd**(`map`): `void`

This method is called when the source is added to the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](../classes/Map.md) | The map instance |

#### Returns

`void`

#### Defined in

src/source/source.ts:82

___

### onRemove

▸ **onRemove**(`map`): `void`

This method is called when the source is removed from the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](../classes/Map.md) | The map instance |

#### Returns

`void`

#### Defined in

src/source/source.ts:87

___

### prepare

▸ **prepare**(): `void`

Allows to execute a prepare step before the source is used.

#### Returns

`void`

#### Defined in

src/source/source.ts:118

___

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

#### Defined in

src/source/source.ts:114

___

### unloadTile

▸ **unloadTile**(`tile`): `Promise`\<`void`\>

Allows to unload a tile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tile` | [`Tile`](../classes/Tile.md) | The tile to unload |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/source/source.ts:108

## Properties

### attribution

• `Optional` **attribution**: `string`

The attribution for the source.

#### Defined in

src/source/source.ts:50

___

### id

• **id**: `string`

The id for the source. Must not be used by any existing source.

#### Defined in

src/source/source.ts:34

___

### isTileClipped

• `Optional` **isTileClipped**: `boolean`

`false` if tiles can be drawn outside their boundaries, `true` if they cannot.

#### Defined in

src/source/source.ts:58

___

### maxzoom

• **maxzoom**: `number`

The maximum zoom level for the source.

#### Defined in

src/source/source.ts:42

___

### minzoom

• **minzoom**: `number`

The minimum zoom level for the source.

#### Defined in

src/source/source.ts:38

___

### reparseOverscaled

• `Optional` **reparseOverscaled**: `boolean`

`true` if tiles should be sent back to the worker for each overzoomed zoom level, `false` if not.

#### Defined in

src/source/source.ts:63

___

### roundZoom

• `Optional` **roundZoom**: `boolean`

`true` if zoom levels are rounded to the nearest integer in the source data, `false` if they are floor-ed to the nearest integer.

#### Defined in

src/source/source.ts:54

___

### tileSize

• **tileSize**: `number`

The tile size for the source.

#### Defined in

src/source/source.ts:46
