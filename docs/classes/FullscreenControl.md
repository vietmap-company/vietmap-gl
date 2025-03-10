# Class: FullscreenControl

A `FullscreenControl` control contains a button for toggling the map in and out of fullscreen mode.
When [requestFullscreen](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen) is not supported, fullscreen is handled via CSS properties.
The map's `cooperativeGestures` option is temporarily disabled while the map
is in fullscreen mode, and is restored when the map exist fullscreen mode.

**`Param`**

the full screen control options

**`Example`**

```ts
map.addControl(new FullscreenControl({container: document.querySelector('body')}));
```

**`See`**

[View a fullscreen map]

### Events

 `fullscreenstart` - Fired when fullscreen mode has started

 `fullscreenend` - Fired when fullscreen mode has ended

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`FullscreenControl`**

## Implements

- [`IControl`](../interfaces/IControl.md)

## Methods

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

[Evented](Evented.md).[listens](Evented.md#listens)

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`FullscreenControl`](FullscreenControl.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`FullscreenControl`](FullscreenControl.md)

`this`

#### Inherited from

[Evented](Evented.md).[off](Evented.md#off)

#### Defined in

src/util/evented.ts:88

___

### on

▸ **on**(`type`, `listener`): `this`

Adds a listener to a specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

#### Returns

`this`

`this`

#### Inherited from

[Evented](Evented.md).[on](Evented.md#on)

#### Defined in

src/util/evented.ts:74

___

### onAdd

▸ **onAdd**(`map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](Map.md#addcontrol)
internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](Map.md) | the Map this control will be added to |

#### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

#### Implementation of

[IControl](../interfaces/IControl.md).[onAdd](../interfaces/IControl.md#onadd)

#### Defined in

src/ui/control/fullscreen_control.ts:73

___

### onRemove

▸ **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](Map.md#removecontrol)
internally.

#### Returns

`void`

#### Implementation of

[IControl](../interfaces/IControl.md).[onRemove](../interfaces/IControl.md#onremove)

#### Defined in

src/ui/control/fullscreen_control.ts:82

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`FullscreenControl`](FullscreenControl.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`FullscreenControl`](FullscreenControl.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`FullscreenControl`](FullscreenControl.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`FullscreenControl`](FullscreenControl.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175
