# Class: Evented

Methods mixed in to other classes for event capabilities.

## Hierarchy

- **`Evented`**

  ↳ [`GeolocateControl`](GeolocateControl.md)

  ↳ [`FullscreenControl`](FullscreenControl.md)

  ↳ [`Popup`](Popup.md)

  ↳ [`Marker`](Marker.md)

  ↳ [`Style`](Style.md)

  ↳ [`GeoJSONSource`](GeoJSONSource.md)

  ↳ [`ImageSource`](ImageSource.md)

  ↳ [`RasterTileSource`](RasterTileSource.md)

  ↳ [`VectorTileSource`](VectorTileSource.md)

  ↳ [`StyleLayer`](StyleLayer.md)

  ↳ [`ImageManager`](ImageManager.md)

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

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`Evented`](Evented.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`Evented`](Evented.md)

`this`

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

#### Defined in

src/util/evented.ts:74

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`Evented`](Evented.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`Evented`](Evented.md)

`this` or a promise if a listener is not provided

#### Defined in

src/util/evented.ts:104

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`Evented`](Evented.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`Evented`](Evented.md)

`this`

#### Defined in

src/util/evented.ts:175
