# Class: MercatorCoordinate

A `MercatorCoordinate` object represents a projected three dimensional position.

`MercatorCoordinate` uses the web mercator projection ([EPSG:3857](https://epsg.io/3857)) with slightly different units:

- the size of 1 unit is the width of the projected world instead of the "mercator meter"
- the origin of the coordinate space is at the north-west corner instead of the middle

For example, `MercatorCoordinate(0, 0, 0)` is the north-west corner of the mercator world and
`MercatorCoordinate(1, 1, 0)` is the south-east corner. If you are familiar with
[vector tiles](https://github.com/mapbox/vector-tile-spec) it may be helpful to think
of the coordinate space as the `0/0/0` tile with an extent of `1`.

The `z` dimension of `MercatorCoordinate` is conformal. A cube in the mercator coordinate space would be rendered as a cube.

**`Example`**

```ts
let nullIsland = new MercatorCoordinate(0.5, 0.5, 0);
```

**`See`**

[Add a custom style layer]

## Implements

- `IMercatorCoordinate`

## Constructors

### constructor

• **new MercatorCoordinate**(`x`, `y`, `z?`): [`MercatorCoordinate`](MercatorCoordinate.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | The x component of the position. |
| `y` | `number` | `undefined` | The y component of the position. |
| `z` | `number` | `0` | The z component of the position. |

#### Returns

[`MercatorCoordinate`](MercatorCoordinate.md)

#### Defined in

src/geo/mercator_coordinate.ts:88

## Methods

### meterInMercatorCoordinateUnits

▸ **meterInMercatorCoordinateUnits**(): `number`

Returns the distance of 1 meter in `MercatorCoordinate` units at this latitude.

For coordinates in real world units using meters, this naturally provides the scale
to transform into `MercatorCoordinate`s.

#### Returns

`number`

Distance of 1 meter in `MercatorCoordinate` units.

#### Implementation of

IMercatorCoordinate.meterInMercatorCoordinateUnits

#### Defined in

src/geo/mercator_coordinate.ts:153

___

### toAltitude

▸ **toAltitude**(): `number`

Returns the altitude in meters of the coordinate.

#### Returns

`number`

The altitude in meters.

**`Example`**

```ts
let coord = new MercatorCoordinate(0, 0, 0.02);
coord.toAltitude(); // 6914.281956295339
```

#### Implementation of

IMercatorCoordinate.toAltitude

#### Defined in

src/geo/mercator_coordinate.ts:141

___

### toLngLat

▸ **toLngLat**(): [`LngLat`](LngLat.md)

Returns the `LngLat` for the coordinate.

#### Returns

[`LngLat`](LngLat.md)

The `LngLat` object.

**`Example`**

```ts
let coord = new MercatorCoordinate(0.5, 0.5, 0);
let lngLat = coord.toLngLat(); // LngLat(0, 0)
```

#### Implementation of

IMercatorCoordinate.toLngLat

#### Defined in

src/geo/mercator_coordinate.ts:125

___

### fromLngLat

▸ **fromLngLat**(`lngLatLike`, `altitude?`): [`MercatorCoordinate`](MercatorCoordinate.md)

Project a `LngLat` to a `MercatorCoordinate`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lngLatLike` | [`LngLatLike`](../types/LngLatLike.md) | `undefined` | The location to project. |
| `altitude` | `number` | `0` | The altitude in meters of the position. |

#### Returns

[`MercatorCoordinate`](MercatorCoordinate.md)

The projected mercator coordinate.

**`Example`**

```ts
let coord = MercatorCoordinate.fromLngLat({ lng: 0, lat: 0}, 0);
coord; // MercatorCoordinate(0.5, 0.5, 0)
```

#### Defined in

src/geo/mercator_coordinate.ts:106
