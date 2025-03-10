# Type alias: PaddingOptions

Ƭ **PaddingOptions**: `Object`

Options for setting padding on calls to methods such as [Map#fitBounds](../classes/Map.md#fitbounds), [Map#fitScreenCoordinates](../classes/Map.md#fitscreencoordinates), and [Map#setPadding](../classes/Map.md#setpadding). Adjust these options to set the amount of padding in pixels added to the edges of the canvas. Set a uniform padding on all edges or individual values for each edge. All properties of this object must be
non-negative integers.

**`Example`**

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

**`Example`**

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: 20
});
```

**`See`**

 - [Fit to the bounds of a LineString](https://maps.vietmap.vn/docs/sdk-web-gl/camera/fit-camera-to-line/)
 - [Fit a map to a bounding box](https://maps.vietmap.vn/docs/sdk-web-gl/camera/fit-camera-to-bounds/)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bottom` | `number` | Padding in pixels from the bottom of the map canvas. |
| `left` | `number` | Padding in pixels from the right of the map canvas. |
| `right` | `number` | Padding in pixels from the left of the map canvas. |
| `top` | `number` | Padding in pixels from the top of the map canvas. |

#### Defined in

src/geo/edge_insets.ts:129
