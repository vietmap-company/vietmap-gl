# Class: GeolocateControl

A `GeolocateControl` control provides a button that uses the browser's geolocation
API to locate the user on the map.

Not all browsers support geolocation,
and some users may disable the feature. Geolocation support for modern
browsers including Chrome requires sites to be served over HTTPS. If
geolocation support is not available, the `GeolocateControl` will show
as disabled.

The zoom level applied will depend on the accuracy of the geolocation provided by the device.

The `GeolocateControl` has two modes. If `trackUserLocation` is `false` (default) the control acts as a button, which when pressed will set the map's camera to target the user location. If the user moves, the map won't update. This is most suited for the desktop. If `trackUserLocation` is `true` the control acts as a toggle button that when active the user's location is actively monitored for changes. In this mode the `GeolocateControl` has three interaction states:
* active - the map's camera automatically updates as the user's location changes, keeping the location dot in the center. Initial state and upon clicking the `GeolocateControl` button.
* passive - the user's location dot automatically updates, but the map's camera does not. Occurs upon the user initiating a map movement.
* disabled - occurs if Geolocation is not available, disabled or denied.

These interaction states can't be controlled programmatically, rather they are set based on user interactions.

**`Example`**

```ts
map.addControl(new GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
```

**`See`**

[Locate the user](https://maps.vietmap.vn/docs/sdk-web-gl/map/example-map/locate-user/)

### Events

 `trackuserlocationend` - Fired when the `GeolocateControl` changes to the background state, which happens when a user changes the camera during an active position lock. This only applies when `trackUserLocation` is `true`. In the background state, the dot on the map will update with location updates but the camera will not.

 `trackuserlocationstart` - Fired when the `GeolocateControl` changes to the active lock state, which happens either upon first obtaining a successful Geolocation API position for the user (a `geolocate` event will follow), or the user clicks the geolocate button when in the background state which uses the last known position to recenter the map and enter active lock state (no `geolocate` event will follow unless the users's location changes).

 `geolocate` - Fired on each Geolocation API position update which returned as success.
`data` - The returned [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

 `error` - Fired on each Geolocation API position update which returned as an error.
`data` - The returned [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

 `outofmaxbounds` Fired on each Geolocation API position update which returned as success but user position is out of map `maxBounds`.
`data` - The returned [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

**`Example`**

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a trackuserlocationend event occurs.
geolocate.on('trackuserlocationend', function() {
  console.log('A trackuserlocationend event has occurred.')
});
```

**`Example`**

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a trackuserlocationstart event occurs.
geolocate.on('trackuserlocationstart', function() {
  console.log('A trackuserlocationstart event has occurred.')
});
```

**`Example`**

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
geolocate.on('geolocate', function() {
  console.log('A geolocate event has occurred.')
});
```

**`Example`**

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when an error event occurs.
geolocate.on('error', function() {
  console.log('An error event has occurred.')
});
```

**`Example`**

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when an outofmaxbounds event occurs.
geolocate.on('outofmaxbounds', function() {
  console.log('An outofmaxbounds event has occurred.')
});
```

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`GeolocateControl`**

## Implements

- [`IControl`](../interfaces/IControl.md)

## Methods

### \_isOutOfMapMaxBounds

▸ **_isOutOfMapMaxBounds**(`position`): `boolean`

Check if the Geolocation API Position is outside the map's `maxBounds`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `GeolocationPosition` | the Geolocation API Position |

#### Returns

`boolean`

`true` if position is outside the map's `maxBounds`, otherwise returns `false`.

#### Defined in

src/ui/control/geolocate_control.ts:270

___

### \_onSuccess

▸ **_onSuccess**(`position`): `void`

When the Geolocation API returns a new location, update the `GeolocateControl`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `GeolocationPosition` | the Geolocation API Position |

#### Returns

`void`

#### Defined in

src/ui/control/geolocate_control.ts:315

___

### \_updateCamera

▸ **_updateCamera**(`position`): `void`

Update the camera location to center on the current position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `GeolocationPosition` | the Geolocation API Position |

#### Returns

`void`

#### Defined in

src/ui/control/geolocate_control.ts:382

___

### \_updateMarker

▸ **_updateMarker**(`position?`): `void`

Update the user location dot Marker to the current position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position?` | `GeolocationPosition` | the Geolocation API Position |

#### Returns

`void`

#### Defined in

src/ui/control/geolocate_control.ts:399

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

▸ **off**(`type`, `listener`): [`GeolocateControl`](GeolocateControl.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`GeolocateControl`](GeolocateControl.md)

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

src/ui/control/geolocate_control.ts:234

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

src/ui/control/geolocate_control.ts:242

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`GeolocateControl`](GeolocateControl.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`GeolocateControl`](GeolocateControl.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`GeolocateControl`](GeolocateControl.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`GeolocateControl`](GeolocateControl.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### trigger

▸ **trigger**(): `boolean`

Programmatically request and move the map to the user's location.

#### Returns

`boolean`

`false` if called before control was added to a map, otherwise returns `true`.

**`Example`**

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
 positionOptions: {
   enableHighAccuracy: true
 },
 trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
map.on('load', function() {
  geolocate.trigger();
});
```

#### Defined in

src/ui/control/geolocate_control.ts:562
