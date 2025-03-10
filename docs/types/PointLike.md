# Type alias: PointLike

Ƭ **PointLike**: `Point` \| [`number`, `number`]

A [Point](https://github.com/mapbox/point-geometry) or an array of two numbers representing `x` and `y` screen coordinates in pixels.

**`Example`**

```ts
let p1 = new Point(-77, 38); // a PointLike which is a Point
let p2 = [-77, 38]; // a PointLike which is an array of two numbers
```

#### Defined in

src/ui/camera.ts:27
