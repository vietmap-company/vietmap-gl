# Class: LngLat

A `LngLat` object represents a given longitude and latitude coordinate, measured in degrees.
These coordinates are based on the [WGS84 (EPSG:4326) standard](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84).

VietMap GL JS uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match the
[GeoJSON specification](https://tools.ietf.org/html/rfc7946).

Note that any VietMap GL JS method that accepts a `LngLat` object as an argument or option
can also accept an `Array` of two numbers and will perform an implicit conversion.
This flexible type is documented as [LngLatLike](../types/LngLatLike.md).

**`Example`**

```ts
let ll = new LngLat(-123.9749, 40.7736);
ll.lng; // = -123.9749
```

**`See`**

 - [Get coordinates of the mouse pointer]
 - [Display a popup](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup/)
 - [Create a timeline animation]

## Constructors

### constructor

• **new LngLat**(`lng`, `lat`): [`LngLat`](LngLat.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lng` | `number` | Longitude, measured in degrees. |
| `lat` | `number` | Latitude, measured in degrees. |

#### Returns

[`LngLat`](LngLat.md)

#### Defined in

src/geo/lng_lat.ts:61

## Methods

### distanceTo

▸ **distanceTo**(`lngLat`): `number`

Returns the approximate distance between a pair of coordinates in meters
Uses the Haversine Formula (from R.W. Sinnott, "Virtues of the Haversine", Sky and Telescope, vol. 68, no. 2, 1984, p. 159)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lngLat` | [`LngLat`](LngLat.md) | coordinates to compute the distance to |

#### Returns

`number`

Distance in meters between the two coordinates.

**`Example`**

```ts
let new_york = new LngLat(-74.0060, 40.7128);
let los_angeles = new LngLat(-118.2437, 34.0522);
new_york.distanceTo(los_angeles); // = 3935751.690893987, "true distance" using a non-spherical approximation is ~3966km
```

#### Defined in

src/geo/lng_lat.ts:128

___

### toArray

▸ **toArray**(): [`number`, `number`]

Returns the coordinates represented as an array of two numbers.

#### Returns

[`number`, `number`]

The coordinates represented as an array of longitude and latitude.

**`Example`**

```ts
let ll = new LngLat(-73.9749, 40.7736);
ll.toArray(); // = [-73.9749, 40.7736]
```

#### Defined in

src/geo/lng_lat.ts:97

___

### toString

▸ **toString**(): `string`

Returns the coordinates represent as a string.

#### Returns

`string`

The coordinates represented as a string of the format `'LngLat(lng, lat)'`.

**`Example`**

```ts
let ll = new LngLat(-73.9749, 40.7736);
ll.toString(); // = "LngLat(-73.9749, 40.7736)"
```

#### Defined in

src/geo/lng_lat.ts:111

___

### wrap

▸ **wrap**(): [`LngLat`](LngLat.md)

Returns a new `LngLat` object whose longitude is wrapped to the range (-180, 180).

#### Returns

[`LngLat`](LngLat.md)

The wrapped `LngLat` object.

**`Example`**

```ts
let ll = new LngLat(286.0251, 40.7736);
let wrapped = ll.wrap();
wrapped.lng; // = -73.9749
```

#### Defined in

src/geo/lng_lat.ts:83

___

### convert

▸ **convert**(`input`): [`LngLat`](LngLat.md)

Converts an array of two numbers or an object with `lng` and `lat` or `lon` and `lat` properties
to a `LngLat` object.

If a `LngLat` object is passed in, the function returns it unchanged.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`LngLatLike`](../types/LngLatLike.md) | An array of two numbers or object to convert, or a `LngLat` object to return. |

#### Returns

[`LngLat`](LngLat.md)

A new `LngLat` object, if a conversion occurred, or the original `LngLat` object.

**`Example`**

```ts
let arr = [-73.9749, 40.7736];
let ll = LngLat.convert(arr);
ll;   // = LngLat {lng: -73.9749, lat: 40.7736}
```

#### Defined in

src/geo/lng_lat.ts:153
