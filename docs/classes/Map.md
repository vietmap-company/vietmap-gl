# Class: Map

The `Map` object represents the map on your page. It exposes methods
and properties that enable you to programmatically change the map,
and fires events as users interact with it.

You create a `Map` by specifying a `container` and other options, see [MapOptions](../types/MapOptions.md) for the full list.
Then VietMap GL JS initializes the map on the page and returns your `Map` object.

**`Example`**

```ts
let map = new Map({
  container: 'map',
  center: [-122.420679, 37.772537],
  zoom: 13,
  style: style_object,
  hash: true,
  transformRequest: (url, resourceType)=> {
    if(resourceType === 'Source' && url.startsWith('http://myHost')) {
      return {
       url: url.replace('http', 'https'),
       headers: { 'my-custom-header': true},
       credentials: 'include'  // Include cookies for cross-origin requests
     }
    }
  }
});
```

**`See`**

[Display a map](https://maps.vietmap.vn/docs/sdk-web-gl/map/example-map/simple-map/)

## Hierarchy

- `Camera`

  ↳ **`Map`**

## Accessors

### repaint

• `get` **repaint**(): `boolean`

Gets and sets a Boolean indicating whether the map will
continuously repaint. This information is useful for analyzing performance.

#### Returns

`boolean`

#### Defined in

src/ui/map.ts:3299

___

### showCollisionBoxes

• `get` **showCollisionBoxes**(): `boolean`

Gets and sets a Boolean indicating whether the map will render boxes
around all symbols in the data source, revealing which symbols
were rendered or which were hidden due to collisions.
This information is useful for debugging.

#### Returns

`boolean`

#### Defined in

src/ui/map.ts:3267

___

### showOverdrawInspector

• `get` **showOverdrawInspector**(): `boolean`

Gets and sets a Boolean indicating whether the map should color-code
each fragment to show how many times it has been shaded.
White fragments have been shaded 8 or more times.
Black fragments have been shaded 0 times.
This information is useful for debugging.

#### Returns

`boolean`

#### Defined in

src/ui/map.ts:3288

___

### showPadding

• `get` **showPadding**(): `boolean`

Gets and sets a Boolean indicating whether the map will visualize
the padding offsets.

#### Returns

`boolean`

#### Defined in

src/ui/map.ts:3254

___

### showTileBoundaries

• `get` **showTileBoundaries**(): `boolean`

Gets and sets a Boolean indicating whether the map will render an outline
around each tile and the tile ID. These tile boundaries are useful for
debugging.

The uncompressed file size of the first vector source is drawn in the top left
corner of each tile, next to the tile ID.

#### Returns

`boolean`

**`Example`**

```ts
map.showTileBoundaries = true;
```

#### Defined in

src/ui/map.ts:3243

___

### version

• `get` **version**(): `string`

Returns the package version of the library

#### Returns

`string`

Package version of the library

#### Defined in

src/ui/map.ts:3314

## Events

### off

▸ **off**\<`T`\>(`type`, `layer`, `listener`): `this`

Removes an event listener for events previously added with `Map#on`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapLayerEventType`](../types/MapLayerEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The event type previously used to install the listener. |
| `layer` | `string` | The layer ID or listener previously used to install the listener. |
| `listener` | (`ev`: [`MapLayerEventType`](../types/MapLayerEventType.md)[`T`] & `Object`) => `void` | The function previously installed as a listener. |

#### Returns

`this`

`this`

#### Overrides

Camera.off

#### Defined in

src/ui/map.ts:1463

▸ **off**\<`T`\>(`type`, `listener`): `this`

Overload of the `off` method that allows to listen to events without specifying a layer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../types/MapEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of the event. |
| `listener` | (`ev`: [`MapEventType`](../types/MapEventType.md)[`T`] & `Object`) => `void` | The function previously installed as a listener. |

#### Returns

`this`

`this`

#### Overrides

Camera.off

#### Defined in

src/ui/map.ts:1475

▸ **off**(`type`, `listener`): `this`

Overload of the `off` method that allows to listen to events without specifying a layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the event. |
| `listener` | [`Listener`](../types/Listener.md) | The function previously installed as a listener. |

#### Returns

`this`

`this`

#### Overrides

Camera.off

#### Defined in

src/ui/map.ts:1483

___

### on

▸ **on**\<`T`\>(`type`, `layer`, `listener`): [`Map`](Map.md)

Adds a listener for events of a specified type, optionally limited to features in a specified style layer.
See [MapEventType](../types/MapEventType.md) and [MapLayerEventType](../types/MapLayerEventType.md) for a full list of events and their description.

| Event                  | Compatible with `layerId` |
|------------------------|---------------------------|
| `mousedown`            | yes                       |
| `mouseup`              | yes                       |
| `mouseover`            | yes                       |
| `mouseout`             | yes                       |
| `mousemove`            | yes                       |
| `mouseenter`           | yes (required)            |
| `mouseleave`           | yes (required)            |
| `click`                | yes                       |
| `dblclick`             | yes                       |
| `contextmenu`          | yes                       |
| `touchstart`           | yes                       |
| `touchend`             | yes                       |
| `touchcancel`          | yes                       |
| `wheel`                |                           |
| `resize`               |                           |
| `remove`               |                           |
| `touchmove`            |                           |
| `movestart`            |                           |
| `move`                 |                           |
| `moveend`              |                           |
| `dragstart`            |                           |
| `drag`                 |                           |
| `dragend`              |                           |
| `zoomstart`            |                           |
| `zoom`                 |                           |
| `zoomend`              |                           |
| `rotatestart`          |                           |
| `rotate`               |                           |
| `rotateend`            |                           |
| `pitchstart`           |                           |
| `pitch`                |                           |
| `pitchend`             |                           |
| `boxzoomstart`         |                           |
| `boxzoomend`           |                           |
| `boxzoomcancel`        |                           |
| `webglcontextlost`     |                           |
| `webglcontextrestored` |                           |
| `load`                 |                           |
| `render`               |                           |
| `idle`                 |                           |
| `error`                |                           |
| `data`                 |                           |
| `styledata`            |                           |
| `sourcedata`           |                           |
| `dataloading`          |                           |
| `styledataloading`     |                           |
| `sourcedataloading`    |                           |
| `styleimagemissing`    |                           |
| `dataabort`            |                           |
| `sourcedataabort`      |                           |

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapLayerEventType`](../types/MapLayerEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The event type to listen for. Events compatible with the optional `layerId` parameter are triggered when the cursor enters a visible portion of the specified layer from outside that layer or outside the map canvas. |
| `layer` | `string` | The ID of a style layer or a listener if no ID is provided. Event will only be triggered if its location is within a visible feature in this layer. The event will have a `features` property containing an array of the matching features. If `layer` is not supplied, the event will not have a `features` property. Please note that many event types are not compatible with the optional `layer` parameter. |
| `listener` | (`ev`: [`MapLayerEventType`](../types/MapLayerEventType.md)[`T`] & `Object`) => `void` | The function to be called when the event is fired. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
// Set an event listener that will fire
// when the map has finished loading
map.on('load', function() {
  // Once the map has finished loading,
  // add a new layer
  map.addLayer({
    id: 'points-of-interest',
    source: {
      type: 'vector',
      url: 'https://maps.vietmap.vn/docs/map-api/tilemap/'
    },
    'source-layer': 'poi_label',
    type: 'circle',
    paint: {
      // VietMap Style Specification paint properties
    },
    layout: {
      // VietMap Style Specification layout properties
    }
  });
});
```

**`Example`**

```ts
// Set an event listener that will fire
// when a feature on the countries layer of the map is clicked
map.on('click', 'countries', (e) => {
  new Popup()
    .setLngLat(e.lngLat)
    .setHTML(`Country name: ${e.features[0].properties.name}`)
    .addTo(map);
});
```

**`See`**

 - [Display popup on click](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)
 - [Center the map on a clicked symbol](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/)
 - [Create a hover effect]
 - [Create a draggable marker](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)

#### Overrides

Camera.on

#### Defined in

src/ui/map.ts:1363

▸ **on**\<`T`\>(`type`, `listener`): `this`

Overload of the `on` method that allows to listen to events without specifying a layer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../types/MapEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of the event. |
| `listener` | (`ev`: [`MapEventType`](../types/MapEventType.md)[`T`] & `Object`) => `void` | The listener callback. |

#### Returns

`this`

`this`

#### Overrides

Camera.on

#### Defined in

src/ui/map.ts:1375

▸ **on**(`type`, `listener`): `this`

Overload of the `on` method that allows to listen to events without specifying a layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the event. |
| `listener` | [`Listener`](../types/Listener.md) | The listener callback. |

#### Returns

`this`

`this`

#### Overrides

Camera.on

#### Defined in

src/ui/map.ts:1383

___

### once

▸ **once**\<`T`\>(`type`, `layer`, `listener?`): [`Map`](Map.md) \| `Promise`\<[`MapLayerEventType`](../types/MapLayerEventType.md)[`T`] & `Object`\>

Adds a listener that will be called only once to a specified event type, optionally limited to features in a specified style layer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapLayerEventType`](../types/MapLayerEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The event type to listen for; one of `'mousedown'`, `'mouseup'`, `'click'`, `'dblclick'`, `'mousemove'`, `'mouseenter'`, `'mouseleave'`, `'mouseover'`, `'mouseout'`, `'contextmenu'`, `'touchstart'`, `'touchend'`, or `'touchcancel'`. `mouseenter` and `mouseover` events are triggered when the cursor enters a visible portion of the specified layer from outside that layer or outside the map canvas. `mouseleave` and `mouseout` events are triggered when the cursor leaves a visible portion of the specified layer, or leaves the map canvas. |
| `layer` | `string` | The ID of a style layer or a listener if no ID is provided. Only events whose location is within a visible feature in this layer will trigger the listener. The event will have a `features` property containing an array of the matching features. |
| `listener?` | (`ev`: [`MapLayerEventType`](../types/MapLayerEventType.md)[`T`] & `Object`) => `void` | The function to be called when the event is fired. |

#### Returns

[`Map`](Map.md) \| `Promise`\<[`MapLayerEventType`](../types/MapLayerEventType.md)[`T`] & `Object`\>

`this` if listener is provided, promise otherwise to allow easier usage of async/await

#### Overrides

Camera.once

#### Defined in

src/ui/map.ts:1418

▸ **once**\<`T`\>(`type`, `listener?`): `Promise`\<`any`\> \| [`Map`](Map.md)

Overload of the `once` method that allows to listen to events without specifying a layer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../types/MapEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of the event. |
| `listener?` | (`ev`: [`MapEventType`](../types/MapEventType.md)[`T`] & `Object`) => `void` | The listener callback. |

#### Returns

`Promise`\<`any`\> \| [`Map`](Map.md)

`this`

#### Overrides

Camera.once

#### Defined in

src/ui/map.ts:1430

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`Map`](Map.md)

Overload of the `once` method that allows to listen to events without specifying a layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the event. |
| `listener?` | [`Listener`](../types/Listener.md) | The listener callback. |

#### Returns

`Promise`\<`any`\> \| [`Map`](Map.md)

`this`

#### Overrides

Camera.once

#### Defined in

src/ui/map.ts:1438

## Methods

### addControl

▸ **addControl**(`control`, `position?`): [`Map`](Map.md)

Adds an [IControl](../interfaces/IControl.md) to the map, calling `control.onAdd(this)`.

An ErrorEvent will be fired if the image parameter is invald.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `control` | [`IControl`](../interfaces/IControl.md) | The [IControl](../interfaces/IControl.md) to add. |
| `position?` | [`ControlPosition`](../types/ControlPosition.md) | position on the map to which the control will be added. Valid values are `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`. Defaults to `'top-right'`. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

Add zoom and rotation controls to the map.
```ts
map.addControl(new NavigationControl());
```

**`See`**

[Display map navigation controls]

#### Defined in

src/ui/map.ts:708

___

### addImage

▸ **addImage**(`id`, `image`, `options?`): `this`

Add an image to the style. This image can be displayed on the map like any other icon in the style's
sprite using the image's ID with
[`icon-image`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#layout-symbol-icon-image),
[`background-pattern`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#paint-background-background-pattern),
[`fill-pattern`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#paint-fill-fill-pattern),
or [`line-pattern`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#paint-line-line-pattern).

A ErrorEvent event will be fired if the image parameter is invalid or there is not enough space in the sprite to add this image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the image. |
| `image` | `ImageBitmap` \| `HTMLImageElement` \| `ImageData` \| [`StyleImageInterface`](../interfaces/StyleImageInterface.md) \| \{ `data`: `Uint8Array` \| `Uint8ClampedArray` ; `height`: `number` ; `width`: `number`  } | The image as an `HTMLImageElement`, `ImageData`, `ImageBitmap` or object with `width`, `height`, and `data` properties with the same format as `ImageData`. |
| `options` | `Partial`\<[`StyleImageMetadata`](../types/StyleImageMetadata.md)\> | Options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
// If the style's sprite does not already contain an image with ID 'cat',
// add the image 'cat-icon.png' to the style's sprite with the ID 'cat'.
map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
   if (error) throw error;
   if (!map.hasImage('cat')) map.addImage('cat', image);
});

// Add a stretchable image that can be used with `icon-text-fit`
// In this example, the image is 600px wide by 400px high.
map.loadImage('https://upload.wikimedia.org/wikipedia/commons/8/89/Black_and_White_Boxed_%28bordered%29.png', function(error, image) {
   if (error) throw error;
   if (!map.hasImage('border-image')) {
     map.addImage('border-image', image, {
         content: [16, 16, 300, 384], // place text over left half of image, avoiding the 16px border
         stretchX: [[16, 584]], // stretch everything horizontally except the 16px border
         stretchY: [[16, 384]], // stretch everything vertically except the 16px border
     });
   }
});
```

**`See`**

 - Use `HTMLImageElement`: [Add an icon to the map](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/add-a-marker/#create-a-marker-with-custom-png-icon)
 - Use `ImageData`: [Add a generated icon to the map]

#### Defined in

src/ui/map.ts:2079

___

### addLayer

▸ **addLayer**(`layer`, `beforeId?`): [`Map`](Map.md)

Adds a [VietMap style layer]
to the map's style.

A layer defines how data from a specified source will be styled. Read more about layer types
and available paint and layout properties in the [VietMap Style Specification].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | [`AddLayerObject`](../types/AddLayerObject.md) | The layer to add, conforming to either the VietMap Style Specification's [layer definition] or, less commonly, the [CustomLayerInterface](../interfaces/CustomLayerInterface.md) specification. Can also be a layer definition with an embedded source definition. The VietMap Style Specification's layer definition is appropriate for most layers. |
| `beforeId?` | `string` | The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

Add a circle layer with a vector source
```ts
map.addLayer({
  id: 'points-of-interest',
  source: {
    type: 'vector',
    url: 'https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}'
  },
  'source-layer': 'poi_label',
  type: 'circle',
  paint: {
    // VietMap Style Specification paint properties
  },
  layout: {
    // VietMap Style Specification layout properties
  }
});
```

**`Example`**

Define a source before using it to create a new layer
```ts
map.addSource('state-data', {
  type: 'geojson',
  data: 'path/to/data.geojson'
});

map.addLayer({
  id: 'states',
  // References the GeoJSON source defined above
  // and does not require a `source-layer`
  source: 'state-data',
  type: 'symbol',
  layout: {
    // Set the label content to the
    // feature's `name` property
    text-field: ['get', 'name']
  }
});
```

**`Example`**

Add a new symbol layer before an existing layer
```ts
map.addLayer({
  id: 'states',
  // References a source that's already been defined
  source: 'state-data',
  type: 'symbol',
  layout: {
    // Set the label content to the
    // feature's `name` property
    text-field: ['get', 'name']
  }
// Add the layer before the existing `cities` layer
}, 'cities');
```

**`See`**

 - [Create and style clusters](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/)
 - [Add a vector tile source]
 - [Add a WMS source]

#### Defined in

src/ui/map.ts:2358

___

### addSource

▸ **addSource**(`id`, `source`): `this`

Adds a source to the map's style.

Events triggered:

Triggers the `source.add` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the source to add. Must not conflict with existing sources. |
| `source` | `SourceSpecification` | The source object, conforming to the VietMap Style Specification's [source definition](https://maps.vietmap.vn/docs/map-api/tilemap/sources) or [CanvasSourceSpecification](../types/CanvasSourceSpecification.md). |

#### Returns

`this`

`this`

**`Example`**

```ts
map.addSource('my-data', {
  type: 'vector',
  url: 'https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}'
});
```

**`Example`**

```ts
map.addSource('my-data', {
  "type": "geojson",
  "data": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.0323, 38.9131]
    },
    "properties": {
      "title": "Mapbox DC",
      "marker-symbol": "monument"
    }
  }
});
```

**`See`**

GeoJSON source: [Add live realtime data]

#### Defined in

src/ui/map.ts:1874

___

### addSprite

▸ **addSprite**(`id`, `url`, `options?`): `this`

Adds a sprite to the map's style. Fires the `style` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the sprite to add. Must not conflict with existing sprites. |
| `url` | `string` | The URL to load the sprite from |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.addSprite('sprite-two', 'http://example.com/sprite-two');
```

#### Defined in

src/ui/map.ts:2608

___

### areTilesLoaded

▸ **areTilesLoaded**(): `boolean`

Returns a Boolean indicating whether all tiles in the viewport from all sources on
the style are loaded.

#### Returns

`boolean`

A Boolean indicating whether all tiles are loaded.

**`Example`**

```ts
let tilesLoaded = map.areTilesLoaded();
```

#### Defined in

src/ui/map.ts:1985

___

### cameraForBounds

▸ **cameraForBounds**(`bounds`, `options?`): [`CenterZoomBearing`](../types/CenterZoomBearing.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [`LngLatBoundsLike`](../types/LngLatBoundsLike.md) | Calculate the center for these bounds in the viewport and use the highest zoom level up to and including `Map#getMaxZoom()` that fits in the viewport. LngLatBounds represent a box that is always axis-aligned with bearing 0. |
| `options?` | [`CameraForBoundsOptions`](../types/CameraForBoundsOptions.md) | Options object |

#### Returns

[`CenterZoomBearing`](../types/CenterZoomBearing.md)

If map is able to fit to provided bounds, returns `center`, `zoom`, and `bearing`.
If map is unable to fit, method will warn and return undefined.

**`Example`**

```ts
let bbox = [[-79, 43], [-73, 45]];
let newCameraTransform = map.cameraForBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

#### Inherited from

Camera.cameraForBounds

#### Defined in

src/ui/camera.ts:640

___

### easeTo

▸ **easeTo**(`options`, `eventData?`): `this`

Changes any combination of `center`, `zoom`, `bearing`, `pitch`, and `padding` with an animated transition
between old and new values. The map will retain its current values for any
details not specified in `options`.

Note: The transition will happen instantly if the user has enabled
the `reduced motion` accessibility feature enabled in their operating system,
unless `options` includes `essential: true`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AnimationOptions`](../types/AnimationOptions.md) & [`CenterZoomBearing`](../types/CenterZoomBearing.md) & \{ `around?`: [`LngLatLike`](../types/LngLatLike.md) ; `pitch?`: `number`  } & \{ `delayEndEvents?`: `number` ; `padding?`: `number` \| [`RequireAtLeastOne`](../types/RequireAtLeastOne.md)\<[`PaddingOptions`](../types/PaddingOptions.md)\>  } & \{ `easeId?`: `string` ; `noMoveStart?`: `boolean`  } | Options describing the destination and animation of the transition. Accepts [CameraOptions](../types/CameraOptions.md) and [AnimationOptions](../types/AnimationOptions.md). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`See`**

[Navigate the map with game-like controls]

#### Inherited from

Camera.easeTo

#### Defined in

src/ui/camera.ts:962

___

### fitBounds

▸ **fitBounds**(`bounds`, `options?`, `eventData?`): `this`

Pans and zooms the map to contain its visible area within the specified geographical bounds.
This function will also reset the map's bearing to 0 if bearing is nonzero.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [`LngLatBoundsLike`](../types/LngLatBoundsLike.md) | Center these bounds in the viewport and use the highest zoom level up to and including `Map#getMaxZoom()` that fits them in the viewport. |
| `options?` | [`FitBoundsOptions`](../types/FitBoundsOptions.md) | Options supports all properties from [AnimationOptions](../types/AnimationOptions.md) and [CameraOptions](../types/CameraOptions.md) in addition to the fields below. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

**`See`**

[Fit a map to a bounding box](https://maps.vietmap.vn/docs/sdk-web-gl/camera/fit-camera-to-bounds/)

#### Inherited from

Camera.fitBounds

#### Defined in

src/ui/camera.ts:774

___

### fitScreenCoordinates

▸ **fitScreenCoordinates**(`p0`, `p1`, `bearing`, `options?`, `eventData?`): `this`

Pans, rotates and zooms the map to to fit the box made by points p0 and p1
once the map is rotated to the specified bearing. To zoom without rotating,
pass in the current map bearing.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend` and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p0` | [`PointLike`](../types/PointLike.md) | First point on screen, in pixel coordinates |
| `p1` | [`PointLike`](../types/PointLike.md) | Second point on screen, in pixel coordinates |
| `bearing` | `number` | Desired map bearing at end of animation, in degrees |
| `options?` | [`FitBoundsOptions`](../types/FitBoundsOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

```ts
let p0 = [220, 400];
let p1 = [500, 900];
map.fitScreenCoordinates(p0, p1, map.getBearing(), {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

**`See`**

Used by [BoxZoomHandler](BoxZoomHandler.md)

#### Inherited from

Camera.fitScreenCoordinates

#### Defined in

src/ui/camera.ts:804

___

### flyTo

▸ **flyTo**(`options`, `eventData?`): `this`

Changes any combination of center, zoom, bearing, and pitch, animating the transition along a curve that
evokes flight. The animation seamlessly incorporates zooming and panning to help
the user maintain her bearings even after traversing a great distance.

Note: The animation will be skipped, and this will behave equivalently to `jumpTo`
if the user has the `reduced motion` accessibility feature enabled in their operating system,
unless 'options' includes `essential: true`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`FlyToOptions`](../types/FlyToOptions.md) | Options describing the destination and animation of the transition. Accepts [CameraOptions](../types/CameraOptions.md), [AnimationOptions](../types/AnimationOptions.md), and the following additional options. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

```ts
// fly with default options to null island
map.flyTo({center: [0, 0], zoom: 9});
// using flyTo options
map.flyTo({
  center: [0, 0],
  zoom: 9,
  speed: 0.2,
  curve: 1,
  easing(t) {
    return t;
  }
});
```

**`See`**

 - [Fly to a location](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-camera/)
 - [Slowly fly to a location](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-camera/)
 - [Fly to a location based on scroll position](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-camera/)

#### Inherited from

Camera.flyTo

#### Defined in

src/ui/camera.ts:1227

___

### getBearing

▸ **getBearing**(): `number`

Returns the map's current bearing. The bearing is the compass direction that is "up"; for example, a bearing
of 90° orients the map so that east is up.

#### Returns

`number`

The map's current bearing.

**`See`**

[Navigate the map with game-like controls]

#### Inherited from

Camera.getBearing

#### Defined in

src/ui/camera.ts:486

___

### getBounds

▸ **getBounds**(): [`LngLatBounds`](LngLatBounds.md)

Returns the map's geographical bounds. When the bearing or pitch is non-zero, the visible region is not
an axis-aligned rectangle, and the result is the smallest bounds that encompasses the visible region.

#### Returns

[`LngLatBounds`](LngLatBounds.md)

The geographical bounds of the map as [LngLatBounds](LngLatBounds.md).

**`Example`**

```ts
let bounds = map.getBounds();
```

#### Defined in

src/ui/map.ts:892

___

### getCameraTargetElevation

▸ **getCameraTargetElevation**(): `number`

Returns the elevation for the point where the camera is looking.
This value corresponds to:
"meters above sea level" * "exaggeration"

#### Returns

`number`

The elevation.

#### Defined in

src/ui/map.ts:3324

___

### getCanvas

▸ **getCanvas**(): `HTMLCanvasElement`

Returns the map's `<canvas>` element.

#### Returns

`HTMLCanvasElement`

The map's `<canvas>` element.

**`See`**

 - [Measure distances]
 - [Display a popup on hover](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-hover/)
 - [Center the map on a clicked symbol](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/)

#### Defined in

src/ui/map.ts:2849

___

### getCanvasContainer

▸ **getCanvasContainer**(): `HTMLElement`

Returns the HTML element containing the map's `<canvas>` element.

If you want to add non-GL overlays to the map, you should append them to this element.

This is the element to which event bindings for map interactivity (such as panning and zooming) are
attached. It will receive bubbled events from child elements such as the `<canvas>`, but not from
map controls.

#### Returns

`HTMLElement`

The container of the map's `<canvas>`.

**`See`**

[Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)

#### Defined in

src/ui/map.ts:2837

___

### getCenter

▸ **getCenter**(): [`LngLat`](LngLat.md)

Returns the map's geographical centerpoint.

#### Returns

[`LngLat`](LngLat.md)

The map's geographical centerpoint.

**`Example`**

Return a LngLat object such as `{lng: 0, lat: 0}`
```ts
let center = map.getCenter();
// access longitude and latitude values directly
let {lng, lat} = map.getCenter();
```

#### Inherited from

Camera.getCenter

#### Defined in

src/ui/camera.ts:327

___

### getContainer

▸ **getContainer**(): `HTMLElement`

Returns the map's containing HTML element.

#### Returns

`HTMLElement`

The map's container.

#### Defined in

src/ui/map.ts:2821

___

### getFeatureState

▸ **getFeatureState**(`feature`): `any`

Gets the `state` of a feature.
A feature's `state` is a set of user-defined key-value pairs that are assigned to a feature at runtime.
Features are identified by their `feature.id` attribute, which can be any number or string.

_Note: To access the values in a feature's state object for the purposes of styling the feature, use the [`feature-state` expression](https://maps.vietmap.vn/docs/map-api/tilemap/expressions/#feature-state)._

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feature` | [`FeatureIdentifier`](../types/FeatureIdentifier.md) | Feature identifier. Feature objects returned from [Map#queryRenderedFeatures](Map.md#queryrenderedfeatures) or event handlers can be used as feature identifiers. |

#### Returns

`any`

The state of the feature: a set of key-value pairs that was assigned to the feature at runtime.

**`Example`**

When the mouse moves over the `my-layer` layer,
get the feature state for the feature under the mouse
```ts
map.on('mousemove', 'my-layer', function(e) {
  if (e.features.length > 0) {
    map.getFeatureState({
      source: 'my-source',
      sourceLayer: 'my-source-layer',
      id: e.features[0].id
    });
  }
});
```

#### Defined in

src/ui/map.ts:2812

___

### getFilter

▸ **getFilter**(`layerId`): `void` \| `FilterSpecification`

Returns the filter applied to the specified style layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the style layer whose filter to get. |

#### Returns

`void` \| `FilterSpecification`

The layer's filter.

#### Defined in

src/ui/map.ts:2504

___

### getGlyphs

▸ **getGlyphs**(): `string`

Returns the value of the style's glyphs URL

#### Returns

`string`

glyphs Style's glyphs url

#### Defined in

src/ui/map.ts:2592

___

### getImage

▸ **getImage**(`id`): [`StyleImage`](../types/StyleImage.md)

Returns an image, specified by ID, currently available in the map.
This includes both images from the style's original sprite
and any images that have been added at runtime using [Map#addImage](Map.md#addimage).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the image. |

#### Returns

[`StyleImage`](../types/StyleImage.md)

An image in the map with the specified ID.

**`Example`**

```ts
let coffeeShopIcon = map.getImage("coffee_cup");
```

#### Defined in

src/ui/map.ts:2194

___

### getLayer

▸ **getLayer**(`id`): [`StyleLayer`](StyleLayer.md)

Returns the layer with the specified ID in the map's style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the layer to get. |

#### Returns

[`StyleLayer`](StyleLayer.md)

The layer with the specified ID, or `undefined`
if the ID corresponds to no existing layers.

**`Example`**

```ts
let stateDataLayer = map.getLayer('state-data');
```

**`See`**

 - [Filter symbols by toggling a list]
 - [Filter symbols by text input]

#### Defined in

src/ui/map.ts:2415

___

### getLayersOrder

▸ **getLayersOrder**(): `string`[]

Return the ids of all layers currently in the style, including custom layers, in order.

#### Returns

`string`[]

ids of layers, in order

**`Example`**

```ts
const orderedLayerIds = map.getLayersOrder();
```

#### Defined in

src/ui/map.ts:2429

___

### getLayoutProperty

▸ **getLayoutProperty**(`layerId`, `name`): `any`

Returns the value of a layout property in the specified style layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the layer to get the layout property from. |
| `name` | `string` | The name of the layout property to get. |

#### Returns

`any`

The value of the specified layout property.

#### Defined in

src/ui/map.ts:2566

___

### getLight

▸ **getLight**(): `LightSpecification`

Returns the value of the light object.

#### Returns

`LightSpecification`

light Light properties of the style.

#### Defined in

src/ui/map.ts:2688

___

### getMaxBounds

▸ **getMaxBounds**(): [`LngLatBounds`](LngLatBounds.md)

Returns the maximum geographical bounds the map is constrained to, or `null` if none set.

#### Returns

[`LngLatBounds`](LngLatBounds.md)

The map object.

**`Example`**

```ts
let maxBounds = map.getMaxBounds();
```

#### Defined in

src/ui/map.ts:904

___

### getMaxPitch

▸ **getMaxPitch**(): `number`

Returns the map's maximum allowable pitch.

#### Returns

`number`

The maxPitch

#### Defined in

src/ui/map.ts:1094

___

### getMaxZoom

▸ **getMaxZoom**(): `number`

Returns the map's maximum allowable zoom level.

#### Returns

`number`

The maxZoom

**`Example`**

```ts
let maxZoom = map.getMaxZoom();
```

#### Defined in

src/ui/map.ts:1020

___

### getMinPitch

▸ **getMinPitch**(): `number`

Returns the map's minimum allowable pitch.

#### Returns

`number`

The minPitch

#### Defined in

src/ui/map.ts:1057

___

### getMinZoom

▸ **getMinZoom**(): `number`

Returns the map's minimum allowable zoom level.

#### Returns

`number`

minZoom

**`Example`**

```ts
let minZoom = map.getMinZoom();
```

#### Defined in

src/ui/map.ts:979

___

### getPadding

▸ **getPadding**(): [`PaddingOptions`](../types/PaddingOptions.md)

Returns the current padding applied around the map viewport.

#### Returns

[`PaddingOptions`](../types/PaddingOptions.md)

The current padding around the map viewport.

#### Inherited from

Camera.getPadding

#### Defined in

src/ui/camera.ts:515

___

### getPaintProperty

▸ **getPaintProperty**(`layerId`, `name`): `unknown`

Returns the value of a paint property in the specified style layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the layer to get the paint property from. |
| `name` | `string` | The name of a paint property to get. |

#### Returns

`unknown`

The value of the specified paint property.

#### Defined in

src/ui/map.ts:2537

___

### getPitch

▸ **getPitch**(): `number`

Returns the map's current pitch (tilt).

#### Returns

`number`

The map's current pitch, measured in degrees away from the plane of the screen.

#### Inherited from

Camera.getPitch

#### Defined in

src/ui/camera.ts:609

___

### getPixelRatio

▸ **getPixelRatio**(): `number`

Returns the map's pixel ratio.
Note that the pixel ratio actually applied may be lower to respect maxCanvasSize.

#### Returns

`number`

The pixel ratio.

#### Defined in

src/ui/map.ts:866

___

### getRenderWorldCopies

▸ **getRenderWorldCopies**(): `boolean`

Returns the state of `renderWorldCopies`. If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`:

- When the map is zoomed out far enough that a single representation of the world does not fill the map's entire
container, there will be blank space beyond 180 and -180 degrees longitude.
- Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the
map and the other on the left edge of the map) at every zoom level.

#### Returns

`boolean`

The renderWorldCopies

**`Example`**

```ts
let worldCopiesRendered = map.getRenderWorldCopies();
```

**`See`**

[Render world copies]

#### Defined in

src/ui/map.ts:1110

___

### getSource

▸ **getSource**(`id`): [`Source`](../interfaces/Source.md)

Returns the source with the specified ID in the map's style.

This method is often used to update a source using the instance members for the relevant
source type as defined in [Sources](#sources).
For example, setting the `data` for a GeoJSON source or updating the `url` and `coordinates`
of an image source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the source to get. |

#### Returns

[`Source`](../interfaces/Source.md)

The style source with the specified ID or `undefined` if the ID
corresponds to no existing sources.
The shape of the object varies by source type.
A list of options for each source type is available on the VietMap Style Specification's
[Sources](https://maps.vietmap.vn/docs/map-api/tilemap/sources/) page.

**`Example`**

```ts
let sourceObject = map.getSource('points');
```

**`See`**

 - [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)
 - [Animate a point](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-along-a-route/)
 - [Add live realtime data]

#### Defined in

src/ui/map.ts:2035

___

### getSprite

▸ **getSprite**(): \{ `id`: `string` ; `url`: `string`  }[]

Returns the as-is value of the style's sprite.

#### Returns

\{ `id`: `string` ; `url`: `string`  }[]

style's sprite list of id-url pairs

#### Defined in

src/ui/map.ts:2640

___

### getStyle

▸ **getStyle**(): `StyleSpecification`

Returns the map's VietMap style object, a JSON object which can be used to recreate the map's style.

#### Returns

`StyleSpecification`

The map's style JSON object.

**`Example`**

```ts
let styleJson = map.getStyle();
```

#### Defined in

src/ui/map.ts:1815

___

### getTerrain

▸ **getTerrain**(): `TerrainSpecification`

Get the terrain-options if terrain is loaded

#### Returns

`TerrainSpecification`

the TerrainSpecification passed to setTerrain

**`Example`**

```ts
map.getTerrain(); // { source: 'terrain' };
```

#### Defined in

src/ui/map.ts:1971

___

### getZoom

▸ **getZoom**(): `number`

Returns the map's current zoom level.

#### Returns

`number`

The map's current zoom level.

**`Example`**

```ts
map.getZoom();
```

#### Inherited from

Camera.getZoom

#### Defined in

src/ui/camera.ts:394

___

### hasControl

▸ **hasControl**(`control`): `boolean`

Checks if a control exists on the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `control` | [`IControl`](../interfaces/IControl.md) | The [IControl](../interfaces/IControl.md) to check. |

#### Returns

`boolean`

true if map contains control.

**`Example`**

```ts
// Define a new navigation control.
let navigation = new NavigationControl();
// Add zoom and rotation controls to the map.
map.addControl(navigation);
// Check that the navigation control exists on the map.
map.hasControl(navigation);
```

#### Defined in

src/ui/map.ts:775

___

### hasImage

▸ **hasImage**(`id`): `boolean`

Check whether or not an image with a specific ID exists in the style. This checks both images
in the style's original sprite and any images
that have been added at runtime using [Map#addImage](Map.md#addimage).

An ErrorEvent will be fired if the image parameter is invald.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the image. |

#### Returns

`boolean`

A Boolean indicating whether the image exists.

**`Example`**

Check if an image with the ID 'cat' exists in the style's sprite.
```ts
let catIconExists = map.hasImage('cat');
```

#### Defined in

src/ui/map.ts:2214

___

### isMoving

▸ **isMoving**(): `boolean`

Returns true if the map is panning, zooming, rotating, or pitching due to a camera animation or user gesture.

#### Returns

`boolean`

true if the map is moving.

**`Example`**

```ts
let isMoving = map.isMoving();
```

#### Defined in

src/ui/map.ts:1177

___

### isRotating

▸ **isRotating**(): `boolean`

Returns true if the map is rotating due to a camera animation or user gesture.

#### Returns

`boolean`

true if the map is rotating.

**`Example`**

```ts
map.isRotating();
```

#### Defined in

src/ui/map.ts:1201

___

### isSourceLoaded

▸ **isSourceLoaded**(`id`): `boolean`

Returns a Boolean indicating whether the source is loaded. Returns `true` if the source with
the given ID in the map's style has no outstanding network requests, otherwise `false`.

A ErrorEvent event will be fired if there is no source wit the specified ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the source to be checked. |

#### Returns

`boolean`

A Boolean indicating whether the source is loaded.

**`Example`**

```ts
let sourceLoaded = map.isSourceLoaded('bathymetry-data');
```

#### Defined in

src/ui/map.ts:1893

___

### isStyleLoaded

▸ **isStyleLoaded**(): `boolean` \| `void`

Returns a Boolean indicating whether the map's style is fully loaded.

#### Returns

`boolean` \| `void`

A Boolean indicating whether the style is fully loaded.

**`Example`**

```ts
let styleLoadStatus = map.isStyleLoaded();
```

#### Defined in

src/ui/map.ts:1831

___

### isZooming

▸ **isZooming**(): `boolean`

Returns true if the map is zooming due to a camera animation or user gesture.

#### Returns

`boolean`

true if the map is zooming.

**`Example`**

```ts
let isZooming = map.isZooming();
```

#### Defined in

src/ui/map.ts:1189

___

### jumpTo

▸ **jumpTo**(`options`, `eventData?`): `this`

Changes any combination of center, zoom, bearing, and pitch, without
an animated transition. The map will retain its current values for any
details not specified in `options`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`JumpToOptions`](../types/JumpToOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

```ts
// jump to coordinates at current zoom
map.jumpTo({center: [0, 0]});
// jump with zoom, pitch, and bearing options
map.jumpTo({
  center: [0, 0],
  zoom: 8,
  pitch: 45,
  bearing: 90
});
```

**`See`**

 - [Jump to a series of locations](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-camera/)
 - [Update a feature in realtime]

#### Inherited from

Camera.jumpTo

#### Defined in

src/ui/camera.ts:854

___

### listImages

▸ **listImages**(): `string`[]

Returns an Array of strings containing the IDs of all images currently available in the map.
This includes both images from the style's original sprite
and any images that have been added at runtime using [Map#addImage](Map.md#addimage).

#### Returns

`string`[]

An Array of strings containing the names of all sprites/images currently available in the map.

**`Example`**

```ts
let allImages = map.listImages();
```

#### Defined in

src/ui/map.ts:2273

___

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

Camera.listens

#### Defined in

src/util/evented.ts:163

___

### loadImage

▸ **loadImage**(`url`): `Promise`\<[`GetResourceResponse`](../types/GetResourceResponse.md)\<`ImageBitmap` \| `HTMLImageElement`\>\>

Load an image from an external URL to be used with [Map#addImage](Map.md#addimage). External
domains must support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the image file. Image file must be in png, webp, or jpg format. |

#### Returns

`Promise`\<[`GetResourceResponse`](../types/GetResourceResponse.md)\<`ImageBitmap` \| `HTMLImageElement`\>\>

a promise that is resolved when the image is loaded

**`Example`**

Load an image from an external URL.
```ts
const response = await map.loadImage('http://placekitten.com/50/50');
// Add the loaded image to the style's sprite with the ID 'kitten'.
map.addImage('kitten', response.data);
```

**`See`**

[Add an icon to the map](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/add-a-marker/#create-a-marker-with-custom-png-icon)

#### Defined in

src/ui/map.ts:2257

___

### loaded

▸ **loaded**(): `boolean`

Returns a Boolean indicating whether the map is fully loaded.

Returns `false` if the style is not yet fully loaded,
or if there has been a change to the sources or style that
has not yet fully loaded.

#### Returns

`boolean`

A Boolean indicating whether the map is fully loaded.

#### Defined in

src/ui/map.ts:2977

___

### moveLayer

▸ **moveLayer**(`id`, `beforeId?`): `this`

Moves a layer to a different z-position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the layer to move. |
| `beforeId?` | `string` | The ID of an existing layer to insert the new layer before. When viewing the map, the `id` layer will appear beneath the `beforeId` layer. If `beforeId` is omitted, the layer will be appended to the end of the layers array and appear above all other layers on the map. |

#### Returns

`this`

`this`

**`Example`**

Move a layer with ID 'polygon' before the layer with ID 'country-label'. The `polygon` layer will appear beneath the `country-label` layer on the map.
```ts
map.moveLayer('polygon', 'country-label');
```

#### Defined in

src/ui/map.ts:2377

___

### panBy

▸ **panBy**(`offset`, `options?`, `eventData?`): `this`

Pans the map by the specified offset.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | [`PointLike`](../types/PointLike.md) | `x` and `y` coordinates by which to pan the map. |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`See`**

[Navigate the map with game-like controls]

#### Inherited from

Camera.panBy

#### Defined in

src/ui/camera.ts:357

___

### panTo

▸ **panTo**(`lnglat`, `options?`, `eventData?`): `this`

Pans the map to the specified location with an animated transition.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lnglat` | [`LngLatLike`](../types/LngLatLike.md) | The location to pan the map to. |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options describing the destination and animation of the transition. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.panTo([-74, 38]);
// Specify that the panTo animation should last 5000 milliseconds.
map.panTo([-74, 38], {duration: 5000});
```

**`See`**

[Update a feature in realtime]

#### Inherited from

Camera.panTo

#### Defined in

src/ui/camera.ts:379

___

### project

▸ **project**(`lnglat`): `Point`

Returns a [Point](https://github.com/mapbox/point-geometry) representing pixel coordinates, relative to the map's `container`,
that correspond to the specified geographical location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lnglat` | [`LngLatLike`](../types/LngLatLike.md) | The geographical location to project. |

#### Returns

`Point`

The [Point](https://github.com/mapbox/point-geometry) corresponding to `lnglat`, relative to the map's `container`.

**`Example`**

```ts
let coordinate = [-122.420679, 37.772537];
let point = map.project(coordinate);
```

#### Defined in

src/ui/map.ts:1147

___

### queryRenderedFeatures

▸ **queryRenderedFeatures**(`geometryOrOptions?`, `options?`): [`MapGeoJSONFeature`](../types/MapGeoJSONFeature.md)[]

Returns an array of MapGeoJSONFeature objects
representing visible features that satisfy the query parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometryOrOptions?` | [`PointLike`](../types/PointLike.md) \| [`QueryRenderedFeaturesOptions`](../types/QueryRenderedFeaturesOptions.md) \| [[`PointLike`](../types/PointLike.md), [`PointLike`](../types/PointLike.md)] | (optional) The geometry of the query region: either a single point or southwest and northeast points describing a bounding box. Omitting this parameter (i.e. calling [Map#queryRenderedFeatures](Map.md#queryrenderedfeatures) with zero arguments, or with only a `options` argument) is equivalent to passing a bounding box encompassing the entire map viewport. The geometryOrOptions can receive a [QueryRenderedFeaturesOptions](../types/QueryRenderedFeaturesOptions.md) only to support a situation where the function receives only one parameter which is the options parameter. |
| `options?` | [`QueryRenderedFeaturesOptions`](../types/QueryRenderedFeaturesOptions.md) | (optional) Options object. |

#### Returns

[`MapGeoJSONFeature`](../types/MapGeoJSONFeature.md)[]

An array of MapGeoJSONFeature objects.

The `properties` value of each returned feature object contains the properties of its source feature. For GeoJSON sources, only
string and numeric property values are supported (i.e. `null`, `Array`, and `Object` values are not supported).

Each feature includes top-level `layer`, `source`, and `sourceLayer` properties. The `layer` property is an object
representing the style layer to  which the feature belongs. Layout and paint properties in this object contain values
which are fully evaluated for the given zoom level and feature.

Only features that are currently rendered are included. Some features will **not** be included, like:

- Features from layers whose `visibility` property is `"none"`.
- Features from layers whose zoom range excludes the current zoom level.
- Symbol features that have been hidden due to text or icon collision.

Features from all other layers are included, including features that may have no visible
contribution to the rendered result; for example, because the layer's opacity or color alpha component is set to
0.

The topmost rendered feature appears first in the returned array, and subsequent features are sorted by
descending z-order. Features that are rendered multiple times (due to wrapping across the antemeridian at low
zoom levels) are returned only once (though subject to the following caveat).

Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature
geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple
times in query results. For example, suppose there is a highway running through the bounding rectangle of a query.
The results of the query will be those parts of the highway that lie within the map tiles covering the bounding
rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile
will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple
tiles due to tile buffering.

**`Example`**

Find all features at a point
```ts
let features = map.queryRenderedFeatures(
  [20, 35],
  { layers: ['my-layer-name'] }
);
```

**`Example`**

Find all features within a static bounding box
```ts
let features = map.queryRenderedFeatures(
  [[10, 20], [30, 50]],
  { layers: ['my-layer-name'] }
);
```

**`Example`**

Find all features within a bounding box around a point
```ts
let width = 10;
let height = 20;
let features = map.queryRenderedFeatures([
  [point.x - width / 2, point.y - height / 2],
  [point.x + width / 2, point.y + height / 2]
], { layers: ['my-layer-name'] });
```

**`Example`**

Query all rendered features from a single layer
```ts
let features = map.queryRenderedFeatures({ layers: ['my-layer-name'] });
```

**`See`**

[Get features under the mouse pointer]

#### Defined in

src/ui/map.ts:1589

___

### querySourceFeatures

▸ **querySourceFeatures**(`sourceId`, `parameters?`): [`MapGeoJSONFeature`](../types/MapGeoJSONFeature.md)[]

Returns an array of MapGeoJSONFeature objects
representing features within the specified vector tile or GeoJSON source that satisfy the query parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceId` | `string` | The ID of the vector tile or GeoJSON source to query. |
| `parameters?` | [`QuerySourceFeatureOptions`](../types/QuerySourceFeatureOptions.md) | The options object. |

#### Returns

[`MapGeoJSONFeature`](../types/MapGeoJSONFeature.md)[]

An array of MapGeoJSONFeature objects.

In contrast to [Map#queryRenderedFeatures](Map.md#queryrenderedfeatures), this function returns all features matching the query parameters,
whether or not they are rendered by the current style (i.e. visible). The domain of the query includes all currently-loaded
vector tiles and GeoJSON source tiles: this function does not check tiles outside the currently
visible viewport.

Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature
geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple
times in query results. For example, suppose there is a highway running through the bounding rectangle of a query.
The results of the query will be those parts of the highway that lie within the map tiles covering the bounding
rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile
will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple
tiles due to tile buffering.

**`Example`**

Find all features in one source layer in a vector source
```ts
let features = map.querySourceFeatures('your-source-id', {
  sourceLayer: 'your-source-layer'
});
```

#### Defined in

src/ui/map.ts:1639

___

### queryTerrainElevation

▸ **queryTerrainElevation**(`lngLatLike`): `number`

Get the elevation difference between a given point
and a point that is currently in the middle of the screen.
This method should be used for proper positioning of custom 3d objects, as explained [here]
Returns null if terrain is not enabled.
This method is subject to change in VietMap GL JS v5.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lngLatLike` | [`LngLatLike`](../types/LngLatLike.md) | [x,y] or LngLat coordinates of the location |

#### Returns

`number`

elevation offset in meters

#### Inherited from

Camera.queryTerrainElevation

#### Defined in

src/ui/camera.ts:1492

___

### redraw

▸ **redraw**(): `this`

Force a synchronous redraw of the map.

#### Returns

`this`

`this`

**`Example`**

```ts
map.redraw();
```

#### Defined in

src/ui/map.ts:3147

___

### remove

▸ **remove**(): `void`

Clean up and release all internal resources associated with this map.

This includes DOM elements, event bindings, web workers, and WebGL resources.

Use this method when you are done using the map and wish to ensure that it no
longer consumes browser resources. Afterwards, you must not call any other
methods on the map.

#### Returns

`void`

#### Defined in

src/ui/map.ts:3168

___

### removeControl

▸ **removeControl**(`control`): [`Map`](Map.md)

Removes the control from the map.

An ErrorEvent will be fired if the image parameter is invald.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `control` | [`IControl`](../interfaces/IControl.md) | The [IControl](../interfaces/IControl.md) to remove. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
// Define a new navigation control.
let navigation = new NavigationControl();
// Add zoom and rotation controls to the map.
map.addControl(navigation);
// Remove zoom and rotation controls from the map.
map.removeControl(navigation);
```

#### Defined in

src/ui/map.ts:749

___

### removeFeatureState

▸ **removeFeatureState**(`target`, `key?`): `this`

Removes the `state` of a feature, setting it back to the default behavior.
If only a `target.source` is specified, it will remove the state for all features from that source.
If `target.id` is also specified, it will remove all keys for that feature's state.
If `key` is also specified, it removes only that key from that feature's state.
Features are identified by their `feature.id` attribute, which can be any number or string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`FeatureIdentifier`](../types/FeatureIdentifier.md) | Identifier of where to remove state. It can be a source, a feature, or a specific key of feature. Feature objects returned from [Map#queryRenderedFeatures](Map.md#queryrenderedfeatures) or event handlers can be used as feature identifiers. |
| `key?` | `string` | (optional) The key in the feature state to reset. |

#### Returns

`this`

`this`

**`Example`**

Reset the entire state object for all features in the `my-source` source
```ts
map.removeFeatureState({
  source: 'my-source'
});
```

**`Example`**

When the mouse leaves the `my-layer` layer,
reset the entire state object for the
feature under the mouse
```ts
map.on('mouseleave', 'my-layer', function(e) {
  map.removeFeatureState({
    source: 'my-source',
    sourceLayer: 'my-source-layer',
    id: e.features[0].id
  });
});
```

**`Example`**

When the mouse leaves the `my-layer` layer,
reset only the `hover` key-value pair in the
state for the feature under the mouse
```ts
map.on('mouseleave', 'my-layer', function(e) {
  map.removeFeatureState({
    source: 'my-source',
    sourceLayer: 'my-source-layer',
    id: e.features[0].id
  }, 'hover');
});
```

#### Defined in

src/ui/map.ts:2781

___

### removeImage

▸ **removeImage**(`id`): `void`

Remove an image from a style. This can be an image from the style's original
sprite or any images
that have been added at runtime using [Map#addImage](Map.md#addimage).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the image. |

#### Returns

`void`

**`Example`**

```ts
// If an image with the ID 'cat' exists in
// the style's sprite, remove it.
if (map.hasImage('cat')) map.removeImage('cat');
```

#### Defined in

src/ui/map.ts:2237

___

### removeLayer

▸ **removeLayer**(`id`): `this`

Removes the layer with the given ID from the map's style.

An ErrorEvent will be fired if the image parameter is invald.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the layer to remove |

#### Returns

`this`

`this`

**`Example`**

If a layer with ID 'state-data' exists, remove it.
```ts
if (map.getLayer('state-data')) map.removeLayer('state-data');
```

#### Defined in

src/ui/map.ts:2396

___

### removeSource

▸ **removeSource**(`id`): [`Map`](Map.md)

Removes a source from the map's style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the source to remove. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.removeSource('bathymetry-data');
```

#### Defined in

src/ui/map.ts:2008

___

### removeSprite

▸ **removeSprite**(`id`): [`Map`](Map.md)

Removes the sprite from the map's style. Fires the `style` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the sprite to remove. If the sprite is declared as a single URL, the ID must be "default". |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.removeSprite('sprite-two');
map.removeSprite('default');
```

#### Defined in

src/ui/map.ts:2629

___

### resetNorth

▸ **resetNorth**(`options?`, `eventData?`): `this`

Rotates the map so that north is up (0° bearing), with an animated transition.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

#### Inherited from

Camera.resetNorth

#### Defined in

src/ui/camera.ts:564

___

### resetNorthPitch

▸ **resetNorthPitch**(`options?`, `eventData?`): `this`

Rotates and pitches the map so that north is up (0° bearing) and pitch is 0°, with an animated transition.

Triggers the following events: `movestart`, `move`, `moveend`, `pitchstart`, `pitch`, `pitchend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

#### Inherited from

Camera.resetNorthPitch

#### Defined in

src/ui/camera.ts:578

___

### resize

▸ **resize**(`eventData?`): [`Map`](Map.md)

Resizes the map according to the dimensions of its
`container` element.

Checks if the map container size changed and updates the map if it has changed.
This method must be called after the map's `container` is resized programmatically
or when the map is shown after being initially hidden with CSS.

Triggers the following events: `movestart`, `move`, `moveend`, and `resize`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData?` | `any` | Additional properties to be passed to `movestart`, `move`, `resize`, and `moveend` events that get triggered as a result of resize. This can be useful for differentiating the source of an event (for example, user-initiated or programmatically-triggered events). |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

Resize the map when the map container is shown after being initially hidden with CSS.
```ts
let mapDiv = document.getElementById('map');
if (mapDiv.style.visibility === true) map.resize();
```

#### Defined in

src/ui/map.ts:807

___

### rotateTo

▸ **rotateTo**(`bearing`, `options?`, `eventData?`): `this`

Rotates the map to the specified bearing, with an animated transition. The bearing is the compass direction
that is "up"; for example, a bearing of 90° orients the map so that east is up.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bearing` | `number` | The desired bearing. |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

#### Inherited from

Camera.rotateTo

#### Defined in

src/ui/camera.ts:549

___

### setBearing

▸ **setBearing**(`bearing`, `eventData?`): `this`

Sets the map's bearing (rotation). The bearing is the compass direction that is "up"; for example, a bearing
of 90° orients the map so that east is up.

Equivalent to `jumpTo({bearing: bearing})`.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bearing` | `number` | The desired bearing. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

Rotate the map to 90 degrees
```ts
map.setBearing(90);
```

#### Inherited from

Camera.setBearing

#### Defined in

src/ui/camera.ts:505

___

### setCenter

▸ **setCenter**(`center`, `eventData?`): [`Map`](Map.md)

Sets the map's geographical centerpoint. Equivalent to `jumpTo({center: center})`.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`LngLatLike`](../types/LngLatLike.md) | The centerpoint to set. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.setCenter([-74, 38]);
```

#### Inherited from

Camera.setCenter

#### Defined in

src/ui/camera.ts:342

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`Map`](Map.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`Map`](Map.md)

`this`

#### Inherited from

Camera.setEventedParent

#### Defined in

src/util/evented.ts:175

___

### setFeatureState

▸ **setFeatureState**(`feature`, `state`): `this`

Sets the `state` of a feature.
A feature's `state` is a set of user-defined key-value pairs that are assigned to a feature at runtime.
When using this method, the `state` object is merged with any existing key-value pairs in the feature's state.
Features are identified by their `feature.id` attribute, which can be any number or string.

This method can only be used with sources that have a `feature.id` attribute. The `feature.id` attribute can be defined in three ways:

- For vector or GeoJSON sources, including an `id` attribute in the original data file.
- For vector or GeoJSON sources, using the [`promoteId`](https://maps.vietmap.vn/docs/map-api/tilemap/sources/#vector-promoteId) option at the time the source is defined.
- For GeoJSON sources, using the [`generateId`](https://maps.vietmap.vn/docs/map-api/tilemap/sources/#geojson-generateId) option to auto-assign an `id` based on the feature's index in the source data. If you change feature data using `map.getSource('some id').setData(..)`, you may need to re-apply state taking into account updated `id` values.

_Note: You can use the [`feature-state` expression](https://maps.vietmap.vn/docs/map-api/tilemap/expressions/#feature-state) to access the values in a feature's state object for the purposes of styling._

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feature` | [`FeatureIdentifier`](../types/FeatureIdentifier.md) | Feature identifier. Feature objects returned from [Map#queryRenderedFeatures](Map.md#queryrenderedfeatures) or event handlers can be used as feature identifiers. |
| `state` | `any` | A set of key-value pairs. The values should be valid JSON types. |

#### Returns

`this`

`this`

**`Example`**

```ts
// When the mouse moves over the `my-layer` layer, update
// the feature state for the feature under the mouse
map.on('mousemove', 'my-layer', function(e) {
  if (e.features.length > 0) {
    map.setFeatureState({
      source: 'my-source',
      sourceLayer: 'my-source-layer',
      id: e.features[0].id,
    }, {
      hover: true
    });
  }
});
```

**`See`**

[Create a hover effect]

#### Defined in

src/ui/map.ts:2729

___

### setFilter

▸ **setFilter**(`layerId`, `filter?`, `options?`): [`Map`](Map.md)

Sets the filter for the specified style layer.

Filters control which features a style layer renders from its source.
Any feature for which the filter expression evaluates to `true` will be
rendered on the map. Those that are false will be hidden.

Use `setFilter` to show a subset of your source data.

To clear the filter, pass `null` or `undefined` as the second parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the layer to which the filter will be applied. |
| `filter?` | `FilterSpecification` | The filter, conforming to the VietMap Style Specification's [filter definition]. If `null` or `undefined` is provided, the function removes any existing filter from the layer. |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Options object. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

Display only features with the 'name' property 'USA'
```ts
map.setFilter('my-layer', ['==', ['get', 'name'], 'USA']);
```

**`Example`**

Display only features with five or more 'available-spots'
```ts
map.setFilter('bike-docks', ['>=', ['get', 'available-spots'], 5]);
```

**`Example`**

Remove the filter for the 'bike-docks' style layer
```ts
map.setFilter('bike-docks', null);
```

**`See`**

[Create a timeline animation]

#### Defined in

src/ui/map.ts:2493

___

### setGlyphs

▸ **setGlyphs**(`glyphsUrl`, `options?`): `this`

Sets the value of the style's glyphs property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `glyphsUrl` | `string` | Glyph URL to set. Must conform to the [VietMap Style Specification](https://maps.vietmap.vn/docs/map-api/tilemap/glyphs/). |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setGlyphs('https://maps.vietmap.vn/api/font/{fontstack}/{range}.pbf');
```

#### Defined in

src/ui/map.ts:2581

___

### setLayerZoomRange

▸ **setLayerZoomRange**(`layerId`, `minzoom`, `maxzoom`): `this`

Sets the zoom extent for the specified style layer. The zoom extent includes the
[minimum zoom level](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#minzoom)
and [maximum zoom level](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#maxzoom))
at which the layer will be rendered.

Note: For style layers using vector sources, style layers cannot be rendered at zoom levels lower than the
minimum zoom level of the _source layer_ because the data does not exist at those zoom levels. If the minimum
zoom level of the source layer is higher than the minimum zoom level defined in the style layer, the style
layer will not be rendered at all zoom levels in the zoom range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the layer to which the zoom extent will be applied. |
| `minzoom` | `number` | The minimum zoom to set (0-24). |
| `maxzoom` | `number` | The maximum zoom to set (0-24). |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setLayerZoomRange('my-layer', 2, 5);
```

#### Defined in

src/ui/map.ts:2454

___

### setLayoutProperty

▸ **setLayoutProperty**(`layerId`, `name`, `value`, `options?`): `this`

Sets the value of a layout property in the specified style layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the layer to set the layout property in. |
| `name` | `string` | The name of the layout property to set. |
| `value` | `any` | The value of the layout property. Must be of a type appropriate for the property, as defined in the [VietMap Style Specification]. |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | The options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setLayoutProperty('my-layer', 'visibility', 'none');
```

#### Defined in

src/ui/map.ts:2554

___

### setLight

▸ **setLight**(`light`, `options?`): [`Map`](Map.md)

Sets the any combination of light values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `light` | `LightSpecification` | Light properties to set. Must conform to the [VietMap Style Specification](https://maps.vietmap.vn/docs/map-api/tilemap/light). |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Options object. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
let layerVisibility = map.getLayoutProperty('my-layer', 'visibility');
```

#### Defined in

src/ui/map.ts:2677

___

### setMaxBounds

▸ **setMaxBounds**(`bounds?`): [`Map`](Map.md)

Sets or clears the map's geographical bounds.

Pan and zoom operations are constrained within these bounds.
If a pan or zoom is performed that would
display regions outside these bounds, the map will
instead display a position and zoom level
as close as possible to the operation's request while still
remaining within the bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds?` | [`LngLatBoundsLike`](../types/LngLatBoundsLike.md) | The maximum bounds to set. If `null` or `undefined` is provided, the function removes the map's maximum bounds. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

Define bounds that conform to the `LngLatBoundsLike` object as set the max bounds.
```ts
let bounds = [
  [-74.04728, 40.68392], // [west, south]
  [-73.91058, 40.87764]  // [east, north]
];
map.setMaxBounds(bounds);
```

#### Defined in

src/ui/map.ts:930

___

### setMaxPitch

▸ **setMaxPitch**(`maxPitch?`): [`Map`](Map.md)

Sets or clears the map's maximum pitch.
If the map's current pitch is higher than the new maximum,
the map will pitch to the new maximum.

A ErrorEvent event will be fired if maxPitch is out of bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxPitch?` | `number` | The maximum pitch to set (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the VietMap project. If `null` or `undefined` is provided, the function removes the current maximum pitch (sets it to 60). |

#### Returns

[`Map`](Map.md)

`this`

#### Defined in

src/ui/map.ts:1070

___

### setMaxZoom

▸ **setMaxZoom**(`maxZoom?`): [`Map`](Map.md)

Sets or clears the map's maximum zoom level.
If the map's current zoom level is higher than the new maximum,
the map will zoom to the new maximum.

A ErrorEvent event will be fired if minZoom is out of bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxZoom?` | `number` | The maximum zoom level to set. If `null` or `undefined` is provided, the function removes the current maximum zoom (sets it to 22). |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.setMaxZoom(18.75);
```

#### Defined in

src/ui/map.ts:996

___

### setMinPitch

▸ **setMinPitch**(`minPitch?`): [`Map`](Map.md)

Sets or clears the map's minimum pitch.
If the map's current pitch is lower than the new minimum,
the map will pitch to the new minimum.

A ErrorEvent event will be fired if minPitch is out of bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minPitch?` | `number` | The minimum pitch to set (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the VietMap project. If `null` or `undefined` is provided, the function removes the current minimum pitch (i.e. sets it to 0). |

#### Returns

[`Map`](Map.md)

`this`

#### Defined in

src/ui/map.ts:1033

___

### setMinZoom

▸ **setMinZoom**(`minZoom?`): [`Map`](Map.md)

Sets or clears the map's minimum zoom level.
If the map's current zoom level is lower than the new minimum,
the map will zoom to the new minimum.

It is not always possible to zoom out and reach the set `minZoom`.
Other factors such as map height may restrict zooming. For example,
if the map is 512px tall it will not be possible to zoom below zoom 0
no matter what the `minZoom` is set to.

A ErrorEvent event will be fired if minZoom is out of bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minZoom?` | `number` | The minimum zoom level to set (-2 - 24). If `null` or `undefined` is provided, the function removes the current minimum zoom (i.e. sets it to -2). |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.setMinZoom(12.25);
```

#### Defined in

src/ui/map.ts:955

___

### setPadding

▸ **setPadding**(`padding`, `eventData?`): `this`

Sets the padding in pixels around the viewport.

Equivalent to `jumpTo({padding: padding})`.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `padding` | [`PaddingOptions`](../types/PaddingOptions.md) | The desired padding. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

Sets a left padding of 300px, and a top padding of 50px
```ts
map.setPadding({ left: 300, top: 50 });
```

#### Inherited from

Camera.setPadding

#### Defined in

src/ui/camera.ts:533

___

### setPaintProperty

▸ **setPaintProperty**(`layerId`, `name`, `value`, `options?`): `this`

Sets the value of a paint property in the specified style layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | The ID of the layer to set the paint property in. |
| `name` | `string` | The name of the paint property to set. |
| `value` | `any` | The value of the paint property to set. Must be of a type appropriate for the property, as defined in the [VietMap Style Specification]. Pass `null` to unset the existing value. |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setPaintProperty('my-layer', 'fill-color', '#faafee');
```

**`See`**

 - [Change a layer's color with buttons]
 - [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)

#### Defined in

src/ui/map.ts:2525

___

### setPitch

▸ **setPitch**(`pitch`, `eventData?`): `this`

Sets the map's pitch (tilt). Equivalent to `jumpTo({pitch: pitch})`.

Triggers the following events: `movestart`, `moveend`, `pitchstart`, and `pitchend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pitch` | `number` | The pitch to set, measured in degrees away from the plane of the screen (0-60). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

#### Inherited from

Camera.setPitch

#### Defined in

src/ui/camera.ts:620

___

### setPixelRatio

▸ **setPixelRatio**(`pixelRatio`): `void`

Sets the map's pixel ratio. This allows to override `devicePixelRatio`.
After this call, the canvas' `width` attribute will be `container.clientWidth * pixelRatio`
and its height attribute will be `container.clientHeight * pixelRatio`.
Set this to null to disable `devicePixelRatio` override.
Note that the pixel ratio actually applied may be lower to respect maxCanvasSize.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pixelRatio` | `number` | The pixel ratio. |

#### Returns

`void`

#### Defined in

src/ui/map.ts:878

___

### setRenderWorldCopies

▸ **setRenderWorldCopies**(`renderWorldCopies?`): [`Map`](Map.md)

Sets the state of `renderWorldCopies`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderWorldCopies?` | `boolean` | If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`: - When the map is zoomed out far enough that a single representation of the world does not fill the map's entire container, there will be blank space beyond 180 and -180 degrees longitude. - Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the map and the other on the left edge of the map) at every zoom level. `undefined` is treated as `true`, `null` is treated as `false`. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.setRenderWorldCopies(true);
```

**`See`**

[Render world copies]

#### Defined in

src/ui/map.ts:1130

___

### setSprite

▸ **setSprite**(`spriteUrl`, `options?`): [`Map`](Map.md)

Sets the value of the style's sprite property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spriteUrl` | `string` | Sprite URL to set. |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Options object. |

#### Returns

[`Map`](Map.md)

`this`

**`Example`**

```ts
map.setSprite('YOUR_SPRITE_URL');
```

#### Defined in

src/ui/map.ts:2655

___

### setStyle

▸ **setStyle**(`style`, `options?`): `this`

Updates the map's VietMap style object with a new value.

If a style is already set when this is used and options.diff is set to true, the map renderer will attempt to compare the given style
against the map's current state and perform only the changes necessary to make the map style match the desired state. Changes in sprites
(images used for icons and patterns) and glyphs (fonts for label text) **cannot** be diffed. If the sprites or fonts used in the current
style and the given style are different in any way, the map renderer will force a full update, removing the current style and building
the given one from scratch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` \| `StyleSpecification` | A JSON object conforming to the schema described in the [VietMap Style Specification], or a URL to such JSON. |
| `options?` | [`StyleSwapOptions`](../types/StyleSwapOptions.md) & [`StyleOptions`](../types/StyleOptions.md) | The options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setStyle("https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}");

map.setStyle('https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}', {
  transformStyle: (previousStyle, nextStyle) => ({
      ...nextStyle,
      sources: {
          ...nextStyle.sources,
          // copy a source from previous style
          'osm': previousStyle.sources.osm
      },
      layers: [
          // background layer
          nextStyle.layers[0],
          // copy a layer from previous style
          previousStyle.layers[0],
          // other layers from the next style
          ...nextStyle.layers.slice(1).map(layer => {
              // hide the layers we don't need from demotiles style
              if (layer.id.startsWith('geolines')) {
                  layer.layout = {...layer.layout || {}, visibility: 'none'};
              // filter out US polygons
              } else if (layer.id.startsWith('coastline') || layer.id.startsWith('countries')) {
                  layer.filter = ['!=', ['get', 'ADM0_A3'], 'USA'];
              }
              return layer;
          })
      ]
  })
});
```

#### Defined in

src/ui/map.ts:1691

___

### setTerrain

▸ **setTerrain**(`options`): `this`

Loads a 3D terrain mesh, based on a "raster-dem" source.

Triggers the `terrain` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `TerrainSpecification` | Options object. |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setTerrain({ source: 'terrain' });
```

#### Defined in

src/ui/map.ts:1914

___

### setTransformRequest

▸ **setTransformRequest**(`transformRequest`): `this`

Updates the requestManager's transform request with a new function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformRequest` | [`RequestTransformFunction`](../types/RequestTransformFunction.md) | A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a `url` property and optionally `headers` and `credentials` properties |

#### Returns

`this`

`this`

**`Example`**

```ts
map.setTransformRequest((url: string, resourceType: string) => {});
```

#### Defined in

src/ui/map.ts:1720

___

### setZoom

▸ **setZoom**(`zoom`, `eventData?`): `this`

Sets the map's zoom level. Equivalent to `jumpTo({zoom: zoom})`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The zoom level to set (0-20). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

Zoom to the zoom level 5 without an animated transition
```ts
map.setZoom(5);
```

#### Inherited from

Camera.setZoom

#### Defined in

src/ui/camera.ts:410

___

### snapToNorth

▸ **snapToNorth**(`options?`, `eventData?`): `this`

Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it (i.e. within the
`bearingSnap` threshold).

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

#### Inherited from

Camera.snapToNorth

#### Defined in

src/ui/camera.ts:597

___

### stop

▸ **stop**(): `this`

Stops any animated transition underway.

#### Returns

`this`

`this`

#### Inherited from

Camera.stop

#### Defined in

src/ui/camera.ts:1404

___

### triggerRepaint

▸ **triggerRepaint**(): `void`

Trigger the rendering of a single frame. Use this method with custom layers to
repaint the map when the layer changes. Calling this multiple times before the
next frame is rendered will still result in only a single frame being rendered.

#### Returns

`void`

**`Example`**

```ts
map.triggerRepaint();
```

**`See`**

 - [Add a 3D model]
 - [Add an animated icon to the map]

#### Defined in

src/ui/map.ts:3215

___

### unproject

▸ **unproject**(`point`): [`LngLat`](LngLat.md)

Returns a [LngLat](LngLat.md) representing geographical coordinates that correspond
to the specified pixel coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`PointLike`](../types/PointLike.md) | The pixel coordinates to unproject. |

#### Returns

[`LngLat`](LngLat.md)

The [LngLat](LngLat.md) corresponding to `point`.

**`Example`**

```ts
map.on('click', function(e) {
  // When the map is clicked, get the geographic coordinate.
  let coordinate = map.unproject(e.point);
});
```

#### Defined in

src/ui/map.ts:1165

___

### updateImage

▸ **updateImage**(`id`, `image`): `this`

Update an existing image in a style. This image can be displayed on the map like any other icon in the style's
sprite using the image's ID with
[`icon-image`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#layout-symbol-icon-image),
[`background-pattern`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#paint-background-background-pattern),
[`fill-pattern`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#paint-fill-fill-pattern),
or [`line-pattern`](https://maps.vietmap.vn/docs/map-api/tilemap/layers/#paint-line-line-pattern).

An ErrorEvent will be fired if the image parameter is invald.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the image. |
| `image` | `ImageBitmap` \| `HTMLImageElement` \| `ImageData` \| [`StyleImageInterface`](../interfaces/StyleImageInterface.md) \| \{ `data`: `Uint8Array` \| `Uint8ClampedArray` ; `height`: `number` ; `width`: `number`  } | The image as an `HTMLImageElement`, `ImageData`, `ImageBitmap` or object with `width`, `height`, and `data` properties with the same format as `ImageData`. |

#### Returns

`this`

`this`

**`Example`**

```ts
// If an image with the ID 'cat' already exists in the style's sprite,
// replace that image with a new image, 'other-cat-icon.png'.
if (map.hasImage('cat')) map.updateImage('cat', './other-cat-icon.png');
```

#### Defined in

src/ui/map.ts:2146

___

### zoomIn

▸ **zoomIn**(`options?`, `eventData?`): `this`

Increases the map's zoom level by 1.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

Zoom the map in one level with a custom animation duration
```ts
map.zoomIn({duration: 1000});
```

#### Inherited from

Camera.zoomIn

#### Defined in

src/ui/camera.ts:455

___

### zoomOut

▸ **zoomOut**(`options?`, `eventData?`): `this`

Decreases the map's zoom level by 1.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

Zoom the map out one level with a custom animation offset
```ts
map.zoomOut({offset: [80, 60]});
```

#### Inherited from

Camera.zoomOut

#### Defined in

src/ui/camera.ts:474

___

### zoomTo

▸ **zoomTo**(`zoom`, `options?`, `eventData?`): `this`

Zooms the map to the specified zoom level, with an animated transition.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The zoom level to transition to. |
| `options?` | [`AnimationOptions`](../types/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

`this`

**`Example`**

```ts
// Zoom to the zoom level 5 without an animated transition
map.zoomTo(5);
// Zoom to the zoom level 8 with an animated transition
map.zoomTo(8, {
  duration: 2000,
  offset: [100, 50]
});
```

#### Inherited from

Camera.zoomTo

#### Defined in

src/ui/camera.ts:435

## Properties

### boxZoom

• **boxZoom**: [`BoxZoomHandler`](BoxZoomHandler.md)

The map's [BoxZoomHandler](BoxZoomHandler.md), which implements zooming using a drag gesture with the Shift key pressed.
Find more details and examples using `boxZoom` in the [BoxZoomHandler](BoxZoomHandler.md) section.

#### Defined in

src/ui/map.ts:493

___

### cooperativeGestures

• **cooperativeGestures**: [`CooperativeGesturesHandler`](CooperativeGesturesHandler.md)

The map's [CooperativeGesturesHandler](CooperativeGesturesHandler.md), which allows the user to see cooperative gesture info when user tries to zoom in/out.
Find more details and examples using `cooperativeGestures` in the [CooperativeGesturesHandler](CooperativeGesturesHandler.md) section.

#### Defined in

src/ui/map.ts:536

___

### doubleClickZoom

• **doubleClickZoom**: [`DoubleClickZoomHandler`](DoubleClickZoomHandler.md)

The map's [DoubleClickZoomHandler](DoubleClickZoomHandler.md), which allows the user to zoom by double clicking.
Find more details and examples using `doubleClickZoom` in the [DoubleClickZoomHandler](DoubleClickZoomHandler.md) section.

#### Defined in

src/ui/map.ts:518

___

### dragPan

• **dragPan**: [`DragPanHandler`](DragPanHandler.md)

The map's [DragPanHandler](DragPanHandler.md), which implements dragging the map with a mouse or touch gesture.
Find more details and examples using `dragPan` in the [DragPanHandler](DragPanHandler.md) section.

#### Defined in

src/ui/map.ts:506

___

### dragRotate

• **dragRotate**: [`DragRotateHandler`](DragRotateHandler.md)

The map's [DragRotateHandler](DragRotateHandler.md), which implements rotating the map while dragging with the right
mouse button or with the Control key pressed. Find more details and examples using `dragRotate`
in the [DragRotateHandler](DragRotateHandler.md) section.

#### Defined in

src/ui/map.ts:500

___

### keyboard

• **keyboard**: [`KeyboardHandler`](KeyboardHandler.md)

The map's [KeyboardHandler](KeyboardHandler.md), which allows the user to zoom, rotate, and pan the map using keyboard
shortcuts. Find more details and examples using `keyboard` in the [KeyboardHandler](KeyboardHandler.md) section.

#### Defined in

src/ui/map.ts:512

___

### scrollZoom

• **scrollZoom**: [`ScrollZoomHandler`](ScrollZoomHandler.md)

The map's [ScrollZoomHandler](ScrollZoomHandler.md), which implements zooming in and out with a scroll wheel or trackpad.
Find more details and examples using `scrollZoom` in the [ScrollZoomHandler](ScrollZoomHandler.md) section.

#### Defined in

src/ui/map.ts:487

___

### touchPitch

• **touchPitch**: [`TwoFingersTouchPitchHandler`](TwoFingersTouchPitchHandler.md)

The map's [TwoFingersTouchPitchHandler](TwoFingersTouchPitchHandler.md), which allows the user to pitch the map with touch gestures.
Find more details and examples using `touchPitch` in the [TwoFingersTouchPitchHandler](TwoFingersTouchPitchHandler.md) section.

#### Defined in

src/ui/map.ts:530

___

### touchZoomRotate

• **touchZoomRotate**: [`TwoFingersTouchZoomRotateHandler`](TwoFingersTouchZoomRotateHandler.md)

The map's [TwoFingersTouchZoomRotateHandler](TwoFingersTouchZoomRotateHandler.md), which allows the user to zoom or rotate the map with touch gestures.
Find more details and examples using `touchZoomRotate` in the [TwoFingersTouchZoomRotateHandler](TwoFingersTouchZoomRotateHandler.md) section.

#### Defined in

src/ui/map.ts:524

___

### transformCameraUpdate

• **transformCameraUpdate**: [`CameraUpdateTransformFunction`](../types/CameraUpdateTransformFunction.md)

A callback used to defer camera updates or apply arbitrary constraints.
If specified, this Camera instance can be used as a stateless component in React etc.

#### Inherited from

Camera.transformCameraUpdate

#### Defined in

src/ui/camera.ts:296
