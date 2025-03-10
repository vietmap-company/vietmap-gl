# Class: MapMouseEvent

`MapMouseEvent` is the event type for mouse-related map events.

**`Example`**

```ts
// The `click` event is an example of a `MapMouseEvent`.
// Set up an event listener on the map.
map.on('click', function(e) {
  // The event object (e) contains information like the
  // coordinates of the point on the map that was clicked.
  console.log('A click event has occurred at ' + e.lngLat);
});
```

## Hierarchy

- [`Event`](Event.md)

  ↳ **`MapMouseEvent`**

## Implements

- [`VietMapEvent`](../types/VietMapEvent.md)\<`MouseEvent`\>

## Accessors

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

`true` if `preventDefault` has been called.

#### Returns

`boolean`

#### Defined in

src/ui/events.ts:519

## Methods

### preventDefault

▸ **preventDefault**(): `void`

Prevents subsequent default processing of the event by the map.

Calling this method will prevent the following default map behaviors:

  * On `mousedown` events, the behavior of [DragPanHandler](DragPanHandler.md)
  * On `mousedown` events, the behavior of [DragRotateHandler](DragRotateHandler.md)
  * On `mousedown` events, the behavior of [BoxZoomHandler](BoxZoomHandler.md)
  * On `dblclick` events, the behavior of [DoubleClickZoomHandler](DoubleClickZoomHandler.md)

#### Returns

`void`

#### Defined in

src/ui/events.ts:512

## Properties

### lngLat

• **lngLat**: [`LngLat`](LngLat.md)

The geographic location on the map of the mouse cursor.

#### Defined in

src/ui/events.ts:499

___

### originalEvent

• **originalEvent**: `MouseEvent`

The DOM event which caused the map event.

#### Implementation of

VietMapEvent.originalEvent

#### Defined in

src/ui/events.ts:489

___

### point

• **point**: `Point`

The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.

#### Defined in

src/ui/events.ts:494

___

### target

• **target**: [`Map`](Map.md)

The `Map` object that fired the event.

#### Implementation of

VietMapEvent.target

#### Defined in

src/ui/events.ts:484

___

### type

• **type**: ``"click"`` \| ``"contextmenu"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"``

The event type

#### Implementation of

VietMapEvent.type

#### Overrides

Event.type

#### Defined in

src/ui/events.ts:479
