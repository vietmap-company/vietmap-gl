# Type alias: CameraOptions

Ƭ **CameraOptions**: [`CenterZoomBearing`](CenterZoomBearing.md) & \{ `around?`: [`LngLatLike`](LngLatLike.md) ; `pitch?`: `number`  }

Options common to [Map#jumpTo](../classes/Map.md#jumpto), [Map#easeTo](../classes/Map.md#easeto), and [Map#flyTo](../classes/Map.md#flyto), controlling the desired location,
zoom, bearing, and pitch of the camera. All properties are optional, and when a property is omitted, the current
camera value for that property will remain unchanged.

**`Example`**

Set the map's initial perspective with CameraOptions
```ts
let map = new Map({
  container: 'map',
  style: 'https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}',
  center: [-73.5804, 45.53483],
  pitch: 60,
  bearing: -60,
  zoom: 10
});
```

**`See`**

 - [Set pitch and bearing]
 - [Jump to a series of locations](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-camera/)
 - [Fly to a location](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-camera/)
 - [Display buildings in 3D]

#### Defined in

src/ui/camera.ts:56
