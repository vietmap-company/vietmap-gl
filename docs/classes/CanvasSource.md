# Class: CanvasSource

A data source containing the contents of an HTML canvas. See [CanvasSourceSpecification](../types/CanvasSourceSpecification.md) for detailed documentation of options.

**`Example`**

```ts
// add to map
map.addSource('some id', {
   type: 'canvas',
   canvas: 'idOfMyHTMLCanvas',
   animate: true,
   coordinates: [
       [10.54, 106.18],
       [10.52, 106.18],
       [10.52, 106.17],
       [10.54, 106.17]
   ]
});

// update
let mySource = map.getSource('some id');
mySource.setCoordinates([
    [10.54335737228394, 106.18579907229748],
    [10.52803659439087, 106.1838364847587],
    [10.5295386314392, 106.17683392507606],
    [10.54520273208618, 106.17876344106642]
]);

map.removeSource('some id');  // remove
```

## Hierarchy

- [`ImageSource`](ImageSource.md)

  ↳ **`CanvasSource`**

## Methods

### getCanvas

▸ **getCanvas**(): `HTMLCanvasElement`

Returns the HTML `canvas` element.

#### Returns

`HTMLCanvasElement`

The HTML `canvas` element.

#### Defined in

src/source/canvas_source.ts:147

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

[ImageSource](ImageSource.md).[listens](ImageSource.md#listens)

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`CanvasSource`](CanvasSource.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`CanvasSource`](CanvasSource.md)

`this`

#### Inherited from

[ImageSource](ImageSource.md).[off](ImageSource.md#off)

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

[ImageSource](ImageSource.md).[on](ImageSource.md#on)

#### Defined in

src/util/evented.ts:74

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`CanvasSource`](CanvasSource.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`CanvasSource`](CanvasSource.md)

`this` or a promise if a listener is not provided

#### Inherited from

[ImageSource](ImageSource.md).[once](ImageSource.md#once)

#### Defined in

src/util/evented.ts:104

___

### setCoordinates

▸ **setCoordinates**(`coordinates`): `this`

Sets the image's coordinates and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coordinates` | [`Coordinates`](../types/Coordinates.md) | Four geographical coordinates, represented as arrays of longitude and latitude numbers, which define the corners of the image. The coordinates start at the top left corner of the image and proceed in clockwise order. They do not have to represent a rectangle. |

#### Returns

`this`

`this`

#### Inherited from

[ImageSource](ImageSource.md).[setCoordinates](ImageSource.md#setcoordinates)

#### Defined in

src/source/image_source.ts:208

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`CanvasSource`](CanvasSource.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`CanvasSource`](CanvasSource.md)

`this`

#### Inherited from

[ImageSource](ImageSource.md).[setEventedParent](ImageSource.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### updateImage

▸ **updateImage**(`options`): `this`

Updates the image URL and, optionally, the coordinates. To avoid having the image flash after changing,
set the `raster-fade-duration` paint property on the raster layer to 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`UpdateImageOptions`](../types/UpdateImageOptions.md) | The options object. |

#### Returns

`this`

`this`

#### Inherited from

[ImageSource](ImageSource.md).[updateImage](ImageSource.md#updateimage)

#### Defined in

src/source/image_source.ts:165

## Properties

### pause

• **pause**: () => `void`

Disables animation. The map will display a static copy of the canvas image.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

src/source/canvas_source.ts:81

___

### play

• **play**: () => `void`

Enables animation. The image will be copied from the canvas to the map on each frame.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

src/source/canvas_source.ts:77
