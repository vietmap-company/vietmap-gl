# Class: Popup

A popup component.

**`Example`**

Create a popup
```ts
let popup = new Popup();
// Set an event listener that will fire
// any time the popup is opened
popup.on('open', function(){
  console.log('popup was opened');
});
```

**`Example`**

Create a popup
```ts
let popup = new Popup();
// Set an event listener that will fire
// any time the popup is closed
popup.on('close', function(){
  console.log('popup was closed');
});
```

**`Example`**

```ts
let markerHeight = 50, markerRadius = 10, linearOffset = 25;
let popupOffsets = {
 'top': [0, 0],
 'top-left': [0,0],
 'top-right': [0,0],
 'bottom': [0, -markerHeight],
 'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'left': [markerRadius, (markerHeight - markerRadius) * -1],
 'right': [-markerRadius, (markerHeight - markerRadius) * -1]
 };
let popup = new Popup({offset: popupOffsets, className: 'my-class'})
  .setLngLat(e.lngLat)
  .setHTML("<h1>Hello World!</h1>")
  .setMaxWidth("300px")
  .addTo(map);
```

**`See`**

 - [Display a popup](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup/)
 - [Display a popup on hover](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-hover/)
 - [Display a popup on click](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)
 - [Attach a popup to a marker instance](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)

### Events

 `open` Fired when the popup is opened manually or programmatically. `popup` object that was opened

 `close` Fired when the popup is closed manually or programmatically. `popup` object that was closed

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`Popup`**

## Methods

### addClassName

▸ **addClassName**(`className`): `void`

Adds a CSS class to the popup container element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | Non-empty string with CSS class name to add to popup container |

#### Returns

`void`

**`Example`**

```ts
let popup = new Popup()
popup.addClassName('some-class')
```

#### Defined in

src/ui/popup.ts:481

___

### addTo

▸ **addTo**(`map`): `this`

Adds the popup to a map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](Map.md) | The VietMap GL JS map to add the popup to. |

#### Returns

`this`

`this`

**`Example`**

```ts
new Popup()
  .setLngLat([0, 0])
  .setHTML("<h1>Null Island</h1>")
  .addTo(map);
```

**`See`**

 - [Display a popup](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup/)
 - [Display a popup on hover](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-hover/)
 - [Display a popup on click](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)
 - [Show polygon information on click]

#### Defined in

src/ui/popup.ts:192

___

### getElement

▸ **getElement**(): `HTMLElement`

Returns the `Popup`'s HTML element.

#### Returns

`HTMLElement`

element

**`Example`**

Change the `Popup` element's font size
```ts
let popup = new Popup()
  .setLngLat([-96, 37.8])
  .setHTML("<p>Hello World!</p>")
  .addTo(map);
let popupElem = popup.getElement();
popupElem.style.fontSize = "25px";
```

#### Defined in

src/ui/popup.ts:352

___

### getLngLat

▸ **getLngLat**(): [`LngLat`](LngLat.md)

Returns the geographical location of the popup's anchor.

The longitude of the result may differ by a multiple of 360 degrees from the longitude previously
set by `setLngLat` because `Popup` wraps the anchor longitude across copies of the world to keep
the popup on screen.

#### Returns

[`LngLat`](LngLat.md)

The geographical location of the popup's anchor.

#### Defined in

src/ui/popup.ts:276

___

### getMaxWidth

▸ **getMaxWidth**(): `string`

Returns the popup's maximum width.

#### Returns

`string`

The maximum width of the popup.

#### Defined in

src/ui/popup.ts:417

___

### isOpen

▸ **isOpen**(): `boolean`

#### Returns

`boolean`

`true` if the popup is open, `false` if it is closed.

#### Defined in

src/ui/popup.ts:227

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

▸ **off**(`type`, `listener`): [`Popup`](Popup.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`Popup`](Popup.md)

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

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`Popup`](Popup.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`Popup`](Popup.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### remove

▸ **remove**(): `this`

Removes the popup from the map it has been added to.

#### Returns

`this`

`this`

**`Example`**

```ts
let popup = new Popup().addTo(map);
popup.remove();
```

#### Defined in

src/ui/popup.ts:241

___

### removeClassName

▸ **removeClassName**(`className`): `void`

Removes a CSS class from the popup container element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | Non-empty string with CSS class name to remove from popup container |

#### Returns

`void`

**`Example`**

```ts
let popup = new Popup()
popup.removeClassName('some-class')
```

#### Defined in

src/ui/popup.ts:498

___

### setDOMContent

▸ **setDOMContent**(`htmlNode`): `this`

Sets the popup's content to the element provided as a DOM node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `htmlNode` | `Node` | A DOM node to be used as content for the popup. |

#### Returns

`this`

`this`

**`Example`**

Create an element with the popup content
```ts
let div = document.createElement('div');
div.innerHTML = 'Hello, world!';
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setDOMContent(div)
  .addTo(map);
```

#### Defined in

src/ui/popup.ts:450

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`Popup`](Popup.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`Popup`](Popup.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### setHTML

▸ **setHTML**(`html`): `this`

Sets the popup's content to the HTML provided as a string.

This method does not perform HTML filtering or sanitization, and must be
used only with trusted content. Consider [Popup#setText](Popup.md#settext) if
the content is an untrusted text string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `html` | `string` | A string representing HTML content for the popup. |

#### Returns

`this`

`this`

**`Example`**

```ts
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setHTML("<h1>Hello World!</h1>")
  .addTo(map);
```

**`See`**

 - [Display a popup](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup/)
 - [Display a popup on hover](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-hover/)
 - [Display a popup on click](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)
 - [Attach a popup to a marker instance](https://maps.vietmap.vn/docs/sdk-web-gl/popup/example-popup/popup-marker/)

#### Defined in

src/ui/popup.ts:398

___

### setLngLat

▸ **setLngLat**(`lnglat`): `this`

Sets the geographical location of the popup's anchor, and moves the popup to it. Replaces trackPointer() behavior.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lnglat` | [`LngLatLike`](../types/LngLatLike.md) | The geographical location to set as the popup's anchor. |

#### Returns

`this`

`this`

#### Defined in

src/ui/popup.ts:286

___

### setMaxWidth

▸ **setMaxWidth**(`maxWidth`): `this`

Sets the popup's maximum width. This is setting the CSS property `max-width`.
Available values can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxWidth` | `string` | A string representing the value for the maximum width. |

#### Returns

`this`

`this`

#### Defined in

src/ui/popup.ts:428

___

### setOffset

▸ **setOffset**(`offset?`): `this`

Sets the popup's offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | [`Offset`](../types/Offset.md) | Sets the popup's offset. |

#### Returns

`this`

`this`

#### Defined in

src/ui/popup.ts:510

___

### setSubpixelPositioning

▸ **setSubpixelPositioning**(`value`): `void`

Set the option to allow subpixel positioning of the popup by passing a boolean

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | When boolean is true, subpixel positioning is enabled for the popup. |

#### Returns

`void`

**`Example`**

```ts
let popup = new Popup()
popup.setSubpixelPositioning(true);
```

#### Defined in

src/ui/popup.ts:546

___

### setText

▸ **setText**(`text`): `this`

Sets the popup's content to a string of text.

This function creates a [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) node in the DOM,
so it cannot insert raw HTML. Use this method for security against XSS
if the popup content is user-provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Textual content for the popup. |

#### Returns

`this`

`this`

**`Example`**

```ts
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setText('Hello, world!')
  .addTo(map);
```

#### Defined in

src/ui/popup.ts:373

___

### toggleClassName

▸ **toggleClassName**(`className`): `boolean`

Add or remove the given CSS class on the popup container, depending on whether the container currently has that class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | Non-empty string with CSS class name to add/remove |

#### Returns

`boolean`

if the class was removed return false, if class was added, then return true, undefined if there is no container

**`Example`**

```ts
let popup = new Popup()
popup.toggleClassName('toggleClass')
```

#### Defined in

src/ui/popup.ts:529

___

### trackPointer

▸ **trackPointer**(): `this`

Tracks the popup anchor to the cursor position on screens with a pointer device (it will be hidden on touchscreens). Replaces the `setLngLat` behavior.
For most use cases, set `closeOnClick` and `closeButton` to `false`.

#### Returns

`this`

`this`

**`Example`**

```ts
let popup = new Popup({ closeOnClick: false, closeButton: false })
  .setHTML("<h1>Hello World!</h1>")
  .trackPointer()
  .addTo(map);
```

#### Defined in

src/ui/popup.ts:319
