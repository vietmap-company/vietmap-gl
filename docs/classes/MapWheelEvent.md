# Class: MapWheelEvent

`MapWheelEvent` is the event type for the `wheel` map event.

## Hierarchy

- [`Event`](Event.md)

  ↳ **`MapWheelEvent`**

## Accessors

### defaultPrevented

• `get` **defaultPrevented**(): `boolean`

`true` if `preventDefault` has been called.

#### Returns

`boolean`

#### Defined in

src/ui/events.ts:646

## Constructors

### constructor

• **new MapWheelEvent**(`type`, `map`, `originalEvent`): [`MapWheelEvent`](MapWheelEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `map` | [`Map`](Map.md) |
| `originalEvent` | `WheelEvent` |

#### Returns

[`MapWheelEvent`](MapWheelEvent.md)

#### Overrides

Event.constructor

#### Defined in

src/ui/events.ts:653

## Methods

### preventDefault

▸ **preventDefault**(): `void`

Prevents subsequent default processing of the event by the map.

Calling this method will prevent the behavior of [ScrollZoomHandler](ScrollZoomHandler.md).

#### Returns

`void`

#### Defined in

src/ui/events.ts:639

## Properties

### originalEvent

• **originalEvent**: `WheelEvent`

The DOM event which caused the map event.

#### Defined in

src/ui/events.ts:632

___

### target

• **target**: [`Map`](Map.md)

The `Map` object that fired the event.

#### Defined in

src/ui/events.ts:627

___

### type

• **type**: ``"wheel"``

The event type.

#### Overrides

Event.type

#### Defined in

src/ui/events.ts:622
