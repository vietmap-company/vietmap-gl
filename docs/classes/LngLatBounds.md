# Class: LngLatBounds

A `LngLatBounds` object represents a geographical bounding box,
defined by its southwest and northeast points in longitude and latitude.

If no arguments are provided to the constructor, a `null` bounding box is created.

Note that any Mapbox GL method that accepts a `LngLatBounds` object as an argument or option
can also accept an `Array` of two [LngLatLike](../types/LngLatLike.md) constructs and will perform an implicit conversion.
This flexible type is documented as [LngLatBoundsLike](../types/LngLatBoundsLike.md).

**`Example`**

```ts
let sw = new LngLat(-73.9876, 40.7661);
let ne = new LngLat(-73.9397, 40.8002);
let llb = new LngLatBounds(sw, ne);
```

## Constructors

### constructor

• **new LngLatBounds**(`sw?`, `ne?`): [`LngLatBounds`](LngLatBounds.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sw?` | [`number`, `number`, `number`, `number`] \| [`LngLatLike`](../types/LngLatLike.md) \| [[`LngLatLike`](../types/LngLatLike.md), [`LngLatLike`](../types/LngLatLike.md)] | The southwest corner of the bounding box. OR array of 4 numbers in the order of west, south, east, north OR array of 2 LngLatLike: [sw,ne] |
| `ne?` | [`LngLatLike`](../types/LngLatLike.md) | The northeast corner of the bounding box. |

#### Returns

[`LngLatBounds`](LngLatBounds.md)

**`Example`**

```ts
let sw = new LngLat(-73.9876, 40.7661);
let ne = new LngLat(-73.9397, 40.8002);
let llb = new LngLatBounds(sw, ne);
```
OR
```ts
let llb = new LngLatBounds([-73.9876, 40.7661, -73.9397, 40.8002]);
```
OR
```ts
let llb = new LngLatBounds([sw, ne]);
```

#### Defined in

src/geo/lng_lat_bounds.ts:65

## Methods

### contains

▸ **contains**(`lnglat`): `boolean`

Check if the point is within the bounding box.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lnglat` | [`LngLatLike`](../types/LngLatLike.md) | geographic point to check against. |

#### Returns

`boolean`

`true` if the point is within the bounding box.

**`Example`**

```ts
let llb = new LngLatBounds(
  new LngLat(-73.9876, 40.7661),
  new LngLat(-73.9397, 40.8002)
);

let ll = new LngLat(-73.9567, 40.7789);

console.log(llb.contains(ll)); // = true
```

#### Defined in

src/geo/lng_lat_bounds.ts:280

___

### extend

▸ **extend**(`obj`): `this`

Extend the bounds to include a given LngLatLike or LngLatBoundsLike.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`LngLatLike`](../types/LngLatLike.md) \| [`LngLatBoundsLike`](../types/LngLatBoundsLike.md) | object to extend to |

#### Returns

`this`

`this`

#### Defined in

src/geo/lng_lat_bounds.ts:108

___

### getCenter

▸ **getCenter**(): [`LngLat`](LngLat.md)

Returns the geographical coordinate equidistant from the bounding box's corners.

#### Returns

[`LngLat`](LngLat.md)

The bounding box's center.

**`Example`**

```ts
let llb = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getCenter(); // = LngLat {lng: -73.96365, lat: 40.78315}
```

#### Defined in

src/geo/lng_lat_bounds.ts:164

___

### getEast

▸ **getEast**(): `number`

Returns the east edge of the bounding box.

#### Returns

`number`

The east edge of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:215

___

### getNorth

▸ **getNorth**(): `number`

Returns the north edge of the bounding box.

#### Returns

`number`

The north edge of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:222

___

### getNorthEast

▸ **getNorthEast**(): [`LngLat`](LngLat.md)

Returns the northeast corner of the bounding box.

#### Returns

[`LngLat`](LngLat.md)

The northeast corner of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:180

___

### getNorthWest

▸ **getNorthWest**(): [`LngLat`](LngLat.md)

Returns the northwest corner of the bounding box.

#### Returns

[`LngLat`](LngLat.md)

The northwest corner of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:187

___

### getSouth

▸ **getSouth**(): `number`

Returns the south edge of the bounding box.

#### Returns

`number`

The south edge of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:208

___

### getSouthEast

▸ **getSouthEast**(): [`LngLat`](LngLat.md)

Returns the southeast corner of the bounding box.

#### Returns

[`LngLat`](LngLat.md)

The southeast corner of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:194

___

### getSouthWest

▸ **getSouthWest**(): [`LngLat`](LngLat.md)

Returns the southwest corner of the bounding box.

#### Returns

[`LngLat`](LngLat.md)

The southwest corner of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:173

___

### getWest

▸ **getWest**(): `number`

Returns the west edge of the bounding box.

#### Returns

`number`

The west edge of the bounding box.

#### Defined in

src/geo/lng_lat_bounds.ts:201

___

### isEmpty

▸ **isEmpty**(): `boolean`

Check if the bounding box is an empty/`null`-type box.

#### Returns

`boolean`

True if bounds have been defined, otherwise false.

#### Defined in

src/geo/lng_lat_bounds.ts:259

___

### setNorthEast

▸ **setNorthEast**(`ne`): `this`

Set the northeast corner of the bounding box

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ne` | [`LngLatLike`](../types/LngLatLike.md) | a [LngLatLike](../types/LngLatLike.md) object describing the northeast corner of the bounding box. |

#### Returns

`this`

`this`

#### Defined in

src/geo/lng_lat_bounds.ts:86

___

### setSouthWest

▸ **setSouthWest**(`sw`): `this`

Set the southwest corner of the bounding box

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sw` | [`LngLatLike`](../types/LngLatLike.md) | a [LngLatLike](../types/LngLatLike.md) object describing the southwest corner of the bounding box. |

#### Returns

`this`

`this`

#### Defined in

src/geo/lng_lat_bounds.ts:97

___

### toArray

▸ **toArray**(): [`number`, `number`][]

Returns the bounding box represented as an array.

#### Returns

[`number`, `number`][]

The bounding box represented as an array, consisting of the
southwest and northeast coordinates of the bounding represented as arrays of numbers.

**`Example`**

```ts
let llb = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toArray(); // = [[-73.9876, 40.7661], [-73.9397, 40.8002]]
```

#### Defined in

src/geo/lng_lat_bounds.ts:235

___

### toString

▸ **toString**(): `string`

Return the bounding box represented as a string.

#### Returns

`string`

The bounding box represents as a string of the format
`'LngLatBounds(LngLat(lng, lat), LngLat(lng, lat))'`.

**`Example`**

```ts
let llb = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toString(); // = "LngLatBounds(LngLat(-73.9876, 40.7661), LngLat(-73.9397, 40.8002))"
```

#### Defined in

src/geo/lng_lat_bounds.ts:250

___

### convert

▸ **convert**(`input`): [`LngLatBounds`](LngLatBounds.md)

Converts an array to a `LngLatBounds` object.

If a `LngLatBounds` object is passed in, the function returns it unchanged.

Internally, the function calls `LngLat#convert` to convert arrays to `LngLat` values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`LngLatBoundsLike`](../types/LngLatBoundsLike.md) | An array of two coordinates to convert, or a `LngLatBounds` object to return. |

#### Returns

[`LngLatBounds`](LngLatBounds.md)

A new `LngLatBounds` object, if a conversion occurred, or the original `LngLatBounds` object.

**`Example`**

```ts
let arr = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
let llb = LngLatBounds.convert(arr); // = LngLatBounds {_sw: LngLat {lng: -73.9876, lat: 40.7661}, _ne: LngLat {lng: -73.9397, lat: 40.8002}}
```

#### Defined in

src/geo/lng_lat_bounds.ts:307

___

### fromLngLat

▸ **fromLngLat**(`center`, `radius?`): [`LngLatBounds`](LngLatBounds.md)

Returns a `LngLatBounds` from the coordinates extended by a given `radius`. The returned `LngLatBounds` completely contains the `radius`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `center` | [`LngLat`](LngLat.md) | `undefined` | center coordinates of the new bounds. |
| `radius` | `number` | `0` | Distance in meters from the coordinates to extend the bounds. |

#### Returns

[`LngLatBounds`](LngLatBounds.md)

A new `LngLatBounds` object representing the coordinates extended by the `radius`.

**`Example`**

```ts
let center = new LngLat(-73.9749, 40.7736);
LngLatBounds.fromLngLat(100).toArray(); // = [[-73.97501862141328, 40.77351016847229], [-73.97478137858673, 40.77368983152771]]
```

#### Defined in

src/geo/lng_lat_bounds.ts:325
