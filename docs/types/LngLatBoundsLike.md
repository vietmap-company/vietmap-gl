# Type alias: LngLatBoundsLike

Ƭ **LngLatBoundsLike**: [`LngLatBounds`](../classes/LngLatBounds.md) \| [[`LngLatLike`](LngLatLike.md), [`LngLatLike`](LngLatLike.md)] \| [`number`, `number`, `number`, `number`]

A [LngLatBounds](../classes/LngLatBounds.md) object, an array of [LngLatLike](LngLatLike.md) objects in [sw, ne] order,
or an array of numbers in [west, south, east, north] order.

**`Example`**

```ts
let v1 = new LngLatBounds(
  new LngLat(-73.9876, 40.7661),
  new LngLat(-73.9397, 40.8002)
);
let v2 = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])
let v3 = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
```

#### Defined in

src/geo/lng_lat_bounds.ts:20
