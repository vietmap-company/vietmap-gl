# Class: MapTouchEvent

`MapTouchEvent` is the event type for touch-related map events.

## Hierarchy

- [`Event`](Event.md)

  ↳ **`MapTouchEvent`**

## Implements

- [`VietMapEvent`](../types/VietMapEvent.md)\<`TouchEvent`\>

## Accessors

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

`true` if `preventDefault` has been called.

#### Returns

`boolean`

#### Defined in

src/ui/events.ts:594

## Methods

### preventDefault

▸ **preventDefault**(): `void`

Prevents subsequent default processing of the event by the map.

Calling this method will prevent the following default map behaviors:

  * On `touchstart` events, the behavior of [DragPanHandler](DragPanHandler.md)
  * On `touchstart` events, the behavior of [TwoFingersTouchZoomRotateHandler](TwoFingersTouchZoomRotateHandler.md)

#### Returns

`void`

#### Defined in

src/ui/events.ts:587

## Properties

### lngLat

• **lngLat**: [`LngLat`](LngLat.md)

The geographic location on the map of the center of the touch event points.

#### Defined in

src/ui/events.ts:558

___

### lngLats

• **lngLats**: [`LngLat`](LngLat.md)[]

The geographical locations on the map corresponding to a
[touch event's `touches`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches) property.

#### Defined in

src/ui/events.ts:576

___

### originalEvent

• **originalEvent**: `TouchEvent`

The DOM event which caused the map event.

#### Implementation of

VietMapEvent.originalEvent

#### Defined in

src/ui/events.ts:553

___

### point

• **point**: `Point`

The pixel coordinates of the center of the touch event points, relative to the map and measured from the top left
corner.

#### Defined in

src/ui/events.ts:564

___

### points

• **points**: `Point`[]

The array of pixel coordinates corresponding to a
[touch event's `touches`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches) property.

#### Defined in

src/ui/events.ts:570

___

### target

• **target**: [`Map`](Map.md)

The `Map` object that fired the event.

#### Implementation of

VietMapEvent.target

#### Defined in

src/ui/events.ts:548

___

### type

• **type**: ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"``

The event type.

#### Implementation of

VietMapEvent.type

#### Overrides

Event.type

#### Defined in

src/ui/events.ts:543
