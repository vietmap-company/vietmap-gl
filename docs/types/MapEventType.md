# Type alias: MapEventType

Ƭ **MapEventType**: `Object`

`MapEventType` - a mapping between the event name and the event value.
These events are used with the [Map#on](../classes/Map.md#on) method.
When using a `layerId` with [Map#on](../classes/Map.md#on) method, please refer to [MapLayerEventType](MapLayerEventType.md).
The following example can be used for all the events.

**`Example`**

```ts
// Initialize the map
let map = new Map({ // map options });
// Set an event listener
map.on('the-event-name', () => {
  console.log('An event has occurred!');
});
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `boxzoomcancel` | [`VietMapZoomEvent`](VietMapZoomEvent.md) | Fired when the user cancels a "box zoom" interaction, or when the bounding box does not meet the minimum size threshold. See [BoxZoomHandler](../classes/BoxZoomHandler.md). |
| `boxzoomend` | [`VietMapZoomEvent`](VietMapZoomEvent.md) | Fired when a "box zoom" interaction ends. See [BoxZoomHandler](../classes/BoxZoomHandler.md). |
| `boxzoomstart` | [`VietMapZoomEvent`](VietMapZoomEvent.md) | Fired when a "box zoom" interaction starts. See [BoxZoomHandler](../classes/BoxZoomHandler.md). |
| `click` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a pointing device (usually a mouse) is pressed and released at the same point on the map. **`See`** - [Measure distances] - [Center the map on a clicked symbol](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/) |
| `contextmenu` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when the right button of the mouse is clicked or the context menu key is pressed within the map. |
| `data` | [`MapDataEvent`](MapDataEvent.md) | Fired when any map data loads or changes. See [MapDataEvent](MapDataEvent.md) for more information. **`See`** [Display HTML clusters with custom properties](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/) |
| `dataabort` | [`MapDataEvent`](MapDataEvent.md) | Fired when a request for one of the map's sources' tiles or data is aborted. |
| `dataloading` | [`MapDataEvent`](MapDataEvent.md) | Fired when any map data (style, source, tile, etc) begins loading or changing asynchronously. All `dataloading` events are followed by a `data`, `dataabort` or `error` event. |
| `dblclick` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a pointing device (usually a mouse) is pressed and released twice at the same point on the map in rapid succession. **Note:** Under normal conditions, this event will be preceded by two `click` events. |
| `drag` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired repeatedly during a "drag to pan" interaction. See [DragPanHandler](../classes/DragPanHandler.md). |
| `dragend` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired when a "drag to pan" interaction ends. See [DragPanHandler](../classes/DragPanHandler.md). **`See`** [Create a draggable marker](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/) |
| `dragstart` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired when a "drag to pan" interaction starts. See [DragPanHandler](../classes/DragPanHandler.md). |
| `error` | `ErrorEvent` | Fired when an error occurs. This is GL JS's primary error reporting mechanism. We use an event instead of `throw` to better accommodate asynchronous operations. If no listeners are bound to the `error` event, the error will be printed to the console. |
| `idle` | [`VietMapEvent`](VietMapEvent.md) | Fired after the last frame rendered before the map enters an "idle" state: - No camera transitions are in progress - All currently requested tiles have loaded - All fade/transition animations have completed |
| `load` | [`VietMapEvent`](VietMapEvent.md) | `load` Fired immediately after all necessary resources have been downloaded and the first visually complete rendering of the map has occurred. **`See`** - [Draw GeoJSON points] - [Add live realtime data] - [Animate a point](https://maps.vietmap.vn/docs/sdk-web-gl/camera/animate-along-a-route/) |
| `mousedown` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a pointing device (usually a mouse) is pressed within the map. **`See`** [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/) |
| `mousemove` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a pointing device (usually a mouse) is moved while the cursor is inside the map. As you move the cursor across the map, the event will fire every time the cursor changes position within the map. **`See`** - [Get coordinates of the mouse pointer] - [Highlight features under the mouse pointer] - [Display a popup on over](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-hover/) |
| `mouseout` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a point device (usually a mouse) leaves the map's canvas. |
| `mouseover` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a pointing device (usually a mouse) is moved within the map. As you move the cursor across a web page containing a map, the event will fire each time it enters the map or any child elements. **`See`** - [Get coordinates of the mouse pointer] - [Highlight features under the mouse pointer] - [Display a popup on hover](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-hover/) |
| `mouseup` | [`MapMouseEvent`](../classes/MapMouseEvent.md) | Fired when a pointing device (usually a mouse) is released within the map. **`See`** [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/) |
| `move` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\> | Fired repeatedly during an animated transition from one view to another, as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto). **`See`** [Display HTML clusters with custom properties](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/) |
| `moveend` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\> | Fired just after the map completes a transition from one view to another, as the result of either user interaction or methods such as [Map#jumpTo](../classes/Map.md#jumpto). **`See`** [Display HTML clusters with custom properties](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/cluster-marker/) |
| `movestart` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\> | Fired just before the map begins a transition from one view to another, as the result of either user interaction or methods such as [Map#jumpTo](../classes/Map.md#jumpto). |
| `pitch` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired repeatedly during the map's pitch (tilt) animation between one state and another as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto). |
| `pitchend` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired immediately after the map's pitch (tilt) finishes changing as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto). |
| `pitchstart` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired whenever the map's pitch (tilt) begins a change as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto) . |
| `remove` | [`VietMapEvent`](VietMapEvent.md) | Fired immediately after the map has been removed with [Map#remove](../classes/Map.md#remove). |
| `render` | [`VietMapEvent`](VietMapEvent.md) | Fired whenever the map is drawn to the screen, as the result of - a change to the map's position, zoom, pitch, or bearing - a change to the map's style - a change to a GeoJSON source - the loading of a vector tile, GeoJSON file, glyph, or sprite |
| `resize` | [`VietMapEvent`](VietMapEvent.md) | Fired immediately after the map has been resized. |
| `rotate` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired repeatedly during a "drag to rotate" interaction. See [DragRotateHandler](../classes/DragRotateHandler.md). |
| `rotateend` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired when a "drag to rotate" interaction ends. See [DragRotateHandler](../classes/DragRotateHandler.md). |
| `rotatestart` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `undefined`\> | Fired when a "drag to rotate" interaction starts. See [DragRotateHandler](../classes/DragRotateHandler.md). |
| `sourcedata` | [`MapSourceDataEvent`](MapSourceDataEvent.md) | Fired when one of the map's sources loads or changes, including if a tile belonging to a source loads or changes. |
| `sourcedataabort` | [`MapSourceDataEvent`](MapSourceDataEvent.md) | Fired when a request for one of the map's sources' data is aborted. |
| `sourcedataloading` | [`MapSourceDataEvent`](MapSourceDataEvent.md) | Fired when one of the map's sources begins loading or changing asynchronously. All `sourcedataloading` events are followed by a `sourcedata`, `sourcedataabort` or `error` event. |
| `styledata` | [`MapStyleDataEvent`](MapStyleDataEvent.md) | Fired when the map's style loads or changes. |
| `styledataloading` | [`MapStyleDataEvent`](MapStyleDataEvent.md) | Fired when the map's style begins loading or changing asynchronously. All `styledataloading` events are followed by a `styledata` or `error` event. |
| `styleimagemissing` | [`MapStyleImageMissingEvent`](MapStyleImageMissingEvent.md) | Fired when an icon or pattern needed by the style is missing. The missing image can be added with [Map#addImage](../classes/Map.md#addimage) within this event listener callback to prevent the image from being skipped. This event can be used to dynamically generate icons and patterns. **`See`** [Generate and add a missing icon to the map] |
| `terrain` | [`MapTerrainEvent`](MapTerrainEvent.md) | Fired when terrain is changed |
| `tiledataloading` | [`MapDataEvent`](MapDataEvent.md) | - |
| `touchcancel` | [`MapTouchEvent`](../classes/MapTouchEvent.md) | Fired when a [`touchcancel`](https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel) event occurs within the map. |
| `touchend` | [`MapTouchEvent`](../classes/MapTouchEvent.md) | Fired when a [`touchend`](https://developer.mozilla.org/en-US/docs/Web/Events/touchend) event occurs within the map. **`See`** [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/) |
| `touchmove` | [`MapTouchEvent`](../classes/MapTouchEvent.md) | Fired when a [`touchmove`](https://developer.mozilla.org/en-US/docs/Web/Events/touchmove) event occurs within the map. **`See`** [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/) |
| `touchstart` | [`MapTouchEvent`](../classes/MapTouchEvent.md) | Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the map. **`See`** [Create a draggable point](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/) |
| `webglcontextlost` | [`MapContextEvent`](MapContextEvent.md) | Fired when the WebGL context is lost. |
| `webglcontextrestored` | [`MapContextEvent`](MapContextEvent.md) | Fired when the WebGL context is restored. |
| `wheel` | [`MapWheelEvent`](../classes/MapWheelEvent.md) | Fired when a [`wheel`](https://developer.mozilla.org/en-US/docs/Web/Events/wheel) event occurs within the map. |
| `zoom` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\> | Fired repeatedly during an animated transition from one zoom level to another, as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto). |
| `zoomend` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\> | Fired just after the map completes a transition from one zoom level to another, as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto). |
| `zoomstart` | [`VietMapEvent`](VietMapEvent.md)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\> | Fired just before the map begins a transition from one zoom level to another, as the result of either user interaction or methods such as [Map#flyTo](../classes/Map.md#flyto). |

#### Defined in

src/ui/events.ts:148
