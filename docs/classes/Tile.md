# Class: Tile

A tile object is the combination of a Coordinate, which defines
its place, as well as a unique ID and data tracking for its content

## Constructors

### constructor

• **new Tile**(`tileID`, `size`): [`Tile`](Tile.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tileID` | [`OverscaledTileID`](OverscaledTileID.md) | the tile ID |
| `size` | `number` | The tile size |

#### Returns

[`Tile`](Tile.md)

#### Defined in

src/source/tile.ts:103

## Methods

### loadVectorData

▸ **loadVectorData**(`data`, `painter`, `justReloaded?`): `void`

Given a data object with a 'buffers' property, load it into
this tile's elementGroups and buffers properties and set loaded
to true. If the data is null, like in the case of an empty
GeoJSON tile, no-op but still set loaded to true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`WorkerTileResult`](../types/WorkerTileResult.md) | The data from the worker |
| `painter` | `any` | the painter |
| `justReloaded?` | `boolean` | `true` to just reload |

#### Returns

`void`

#### Defined in

src/source/tile.ts:154

___

### unloadVectorData

▸ **unloadVectorData**(): `void`

Release any data or WebGL resources referenced by this tile.

#### Returns

`void`

#### Defined in

src/source/tile.ts:227
