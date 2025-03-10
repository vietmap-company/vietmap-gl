# Class: TwoFingersTouchZoomRotateHandler

The `TwoFingersTouchZoomRotateHandler` allows the user to zoom and rotate the map by
pinching on a touchscreen.

They can zoom with one finger by double tapping and dragging. On the second tap,
hold the finger down and drag up or down to zoom in or out.

## Methods

### disable

▸ **disable**(): `void`

Disables the "pinch to rotate and zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.touchZoomRotate.disable();
```

#### Defined in

src/ui/handler/shim/two_fingers_touch.ts:58

___

### disableRotation

▸ **disableRotation**(): `void`

Disables the "pinch to rotate" interaction, leaving the "pinch to zoom"
interaction enabled.

#### Returns

`void`

**`Example`**

```ts
map.touchZoomRotate.disableRotation();
```

#### Defined in

src/ui/handler/shim/two_fingers_touch.ts:94

___

### enable

▸ **enable**(`options?`): `void`

Enables the "pinch to rotate and zoom" interaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](../types/AroundCenterOptions.md) | Options object. |

#### Returns

`void`

**`Example`**

```ts
map.touchZoomRotate.enable();
map.touchZoomRotate.enable({ around: 'center' });
```

#### Defined in

src/ui/handler/shim/two_fingers_touch.ts:43

___

### enableRotation

▸ **enableRotation**(): `void`

Enables the "pinch to rotate" interaction.

#### Returns

`void`

**`Example`**

```ts
map.touchZoomRotate.enable();
map.touchZoomRotate.enableRotation();
```

#### Defined in

src/ui/handler/shim/two_fingers_touch.ts:108

___

### isActive

▸ **isActive**(): `boolean`

Returns true if the handler is enabled and has detected the start of a zoom/rotate gesture.

#### Returns

`boolean`

`true` if the handler is active, `false` otherwise

#### Defined in

src/ui/handler/shim/two_fingers_touch.ts:81

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "pinch to rotate and zoom" interaction is enabled.

#### Returns

`boolean`

`true` if the "pinch to rotate and zoom" interaction is enabled.

#### Defined in

src/ui/handler/shim/two_fingers_touch.ts:70
