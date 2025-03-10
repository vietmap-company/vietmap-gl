# Class: Marker

Creates a marker component

**`Example`**

```ts
let marker = new Marker()
  .setLngLat([30.5, 50.5])
  .addTo(map);
```

**`Example`**

Set options
```ts
let marker = new Marker({
    color: "#FFFFFF",
    draggable: true
  }).setLngLat([30.5, 50.5])
  .addTo(map);
```

**`See`**

 - [Add custom icons with Markers](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/add-a-marker/)
 - [Create a draggable Marker](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)

### Events

 `dragstart` Fired when dragging starts, `marker` object that is being dragged

 `drag` Fired while dragging. `marker` object that is being dragged

 `dragend` Fired when the marker is finished being dragged, `marker` object that was dragged

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`Marker`**

## Constructors

### constructor

• **new Marker**(`options?`): [`Marker`](Marker.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`MarkerOptions`](../types/MarkerOptions.md) | the options |

#### Returns

[`Marker`](Marker.md)

#### Overrides

Evented.constructor

#### Defined in

src/ui/marker.ts:150

## Methods

### addClassName

▸ **addClassName**(`className`): `void`

Adds a CSS class to the marker element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | on-empty string with CSS class name to add to marker element |

#### Returns

`void`

**`Example`**

```
let marker = new Marker()
marker.addClassName('some-class')
```

#### Defined in

src/ui/marker.ts:647

___

### addTo

▸ **addTo**(`map`): `this`

Attaches the `Marker` to a `Map` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](Map.md) | The VietMap GL JS map to add the marker to. |

#### Returns

`this`

`this`

**`Example`**

```ts
let marker = new Marker()
  .setLngLat([30.5, 50.5])
  .addTo(map); // add the marker to the map
```

#### Defined in

src/ui/marker.ts:310

___

### getElement

▸ **getElement**(): `HTMLElement`

Returns the `Marker`'s HTML element.

#### Returns

`HTMLElement`

element

#### Defined in

src/ui/marker.ts:407

___

### getLngLat

▸ **getLngLat**(): [`LngLat`](LngLat.md)

Get the marker's geographical location.

The longitude of the result may differ by a multiple of 360 degrees from the longitude previously
set by `setLngLat` because `Marker` wraps the anchor longitude across copies of the world to keep
the marker on screen.

#### Returns

[`LngLat`](LngLat.md)

A [LngLat](LngLat.md) describing the marker's location.

**`Example`**

```ts
// Store the marker's longitude and latitude coordinates in a variable
let lngLat = marker.getLngLat();
// Print the marker's longitude and latitude values in the console
console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat )
```

**`See`**

[Create a draggable Marker](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)

#### Defined in

src/ui/marker.ts:377

___

### getOffset

▸ **getOffset**(): `Point`

Get the marker's offset.

#### Returns

`Point`

The marker's screen coordinates in pixels.

#### Defined in

src/ui/marker.ts:621

___

### getPitchAlignment

▸ **getPitchAlignment**(): [`Alignment`](../types/Alignment.md)

Returns the current `pitchAlignment` property of the marker.

#### Returns

[`Alignment`](../types/Alignment.md)

The current pitch alignment of the marker in degrees.

#### Defined in

src/ui/marker.ts:829

___

### getPopup

▸ **getPopup**(): [`Popup`](Popup.md)

Returns the [Popup](Popup.md) instance that is bound to the [Marker](Marker.md).

#### Returns

[`Popup`](Popup.md)

popup

**`Example`**

```ts
let marker = new Marker()
 .setLngLat([0, 0])
 .setPopup(new Popup().setHTML("<h1>Hello World!</h1>"))
 .addTo(map);

console.log(marker.getPopup()); // return the popup instance
```

#### Defined in

src/ui/marker.ts:498

___

### getRotation

▸ **getRotation**(): `number`

Returns the current rotation angle of the marker (in degrees).

#### Returns

`number`

The current rotation angle of the marker.

#### Defined in

src/ui/marker.ts:791

___

### getRotationAlignment

▸ **getRotationAlignment**(): [`Alignment`](../types/Alignment.md)

Returns the current `rotationAlignment` property of the marker.

#### Returns

[`Alignment`](../types/Alignment.md)

The current rotational alignment of the marker.

#### Defined in

src/ui/marker.ts:810

___

### isDraggable

▸ **isDraggable**(): `boolean`

Returns true if the marker can be dragged

#### Returns

`boolean`

True if the marker is draggable.

#### Defined in

src/ui/marker.ts:772

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

[Evented](Evented.md).[listens](Evented.md#listens)

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`Marker`](Marker.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`Marker`](Marker.md)

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

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`Marker`](Marker.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`Marker`](Marker.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### remove

▸ **remove**(): `this`

Removes the marker from a map

#### Returns

`this`

`this`

**`Example`**

```ts
let marker = new Marker().addTo(map);
marker.remove();
```

#### Defined in

src/ui/marker.ts:338

___

### removeClassName

▸ **removeClassName**(`className`): `void`

Removes a CSS class from the marker element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | Non-empty string with CSS class name to remove from marker element |

#### Returns

`void`

**`Example`**

```ts
let marker = new Marker()
marker.removeClassName('some-class')
```

#### Defined in

src/ui/marker.ts:662

___

### setDraggable

▸ **setDraggable**(`shouldBeDraggable?`): `this`

Sets the `draggable` property and functionality of the marker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldBeDraggable?` | `boolean` | Turns drag functionality on/off |

#### Returns

`this`

`this`

#### Defined in

src/ui/marker.ts:750

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`Marker`](Marker.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`Marker`](Marker.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### setLngLat

▸ **setLngLat**(`lnglat`): `this`

Set the marker's geographical position and move it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lnglat` | [`LngLatLike`](../types/LngLatLike.md) | A [LngLat](LngLat.md) describing where the marker should be located. |

#### Returns

`this`

`this`

**`Example`**

Create a new marker, set the longitude and latitude, and add it to the map
```ts
new Marker()
  .setLngLat([-65.017, -16.457])
  .addTo(map);
```

**`See`**

 - [Add custom icons with Markers](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/add-a-marker/)
 - [Create a draggable Marker](https://maps.vietmap.vn/docs/sdk-web-gl/marker/example-marker/draggable-marker/)

#### Defined in

src/ui/marker.ts:395

___

### setOffset

▸ **setOffset**(`offset`): `this`

Sets the offset of the marker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | [`PointLike`](../types/PointLike.md) | The offset in pixels as a [PointLike](../types/PointLike.md) object to apply relative to the element's center. Negatives indicate left and up. |

#### Returns

`this`

`this`

#### Defined in

src/ui/marker.ts:630

___

### setOpacity

▸ **setOpacity**(`opacity?`, `opacityWhenCovered?`): `this`

Sets the `opacity` and `opacityWhenCovered` properties of the marker.
When called without arguments, resets opacity and opacityWhenCovered to defaults

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opacity?` | `string` | Sets the `opacity` property of the marker. |
| `opacityWhenCovered?` | `string` | Sets the `opacityWhenCovered` property of the marker. |

#### Returns

`this`

`this`

#### Defined in

src/ui/marker.ts:840

___

### setPitchAlignment

▸ **setPitchAlignment**(`alignment?`): `this`

Sets the `pitchAlignment` property of the marker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alignment?` | [`Alignment`](../types/Alignment.md) | Sets the `pitchAlignment` property of the marker. If alignment is 'auto', it will automatically match `rotationAlignment`. |

#### Returns

`this`

`this`

#### Defined in

src/ui/marker.ts:819

___

### setPopup

▸ **setPopup**(`popup?`): `this`

Binds a [Popup](Popup.md) to the [Marker](Marker.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `popup?` | [`Popup`](Popup.md) | An instance of the [Popup](Popup.md) class. If undefined or null, any popup set on this [Marker](Marker.md) instance is unset. |

#### Returns

`this`

`this`

**`Example`**

```ts
let marker = new Marker()
 .setLngLat([0, 0])
 .setPopup(new Popup().setHTML("<h1>Hello World!</h1>")) // add popup
 .addTo(map);
```

**`See`**

[Attach a popup to a marker instance](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)

#### Defined in

src/ui/marker.ts:425

___

### setRotation

▸ **setRotation**(`rotation?`): `this`

Sets the `rotation` property of the marker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation?` | `number` | The rotation angle of the marker (clockwise, in degrees), relative to its respective [Marker#setRotationAlignment](Marker.md#setrotationalignment) setting. |

#### Returns

`this`

`this`

#### Defined in

src/ui/marker.ts:781

___

### setRotationAlignment

▸ **setRotationAlignment**(`alignment?`): `this`

Sets the `rotationAlignment` property of the marker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alignment?` | [`Alignment`](../types/Alignment.md) | Sets the `rotationAlignment` property of the marker. defaults to 'auto' |

#### Returns

`this`

`this`

#### Defined in

src/ui/marker.ts:800

___

### toggleClassName

▸ **toggleClassName**(`className`): `boolean`

Add or remove the given CSS class on the marker element, depending on whether the element currently has that class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | Non-empty string with CSS class name to add/remove |

#### Returns

`boolean`

if the class was removed return false, if class was added, then return true

**`Example`**

```ts
let marker = new Marker()
marker.toggleClassName('toggleClass')
```

#### Defined in

src/ui/marker.ts:679

___

### togglePopup

▸ **togglePopup**(): `this`

Opens or closes the [Popup](Popup.md) instance that is bound to the [Marker](Marker.md), depending on the current state of the [Popup](Popup.md).

#### Returns

`this`

`this`

**`Example`**

```ts
let marker = new Marker()
 .setLngLat([0, 0])
 .setPopup(new Popup().setHTML("<h1>Hello World!</h1>"))
 .addTo(map);

marker.togglePopup(); // toggle popup open or closed
```

#### Defined in

src/ui/marker.ts:515
