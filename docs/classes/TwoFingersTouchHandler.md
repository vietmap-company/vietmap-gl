# Class: TwoFingersTouchHandler

The `TwoFingersTouchHandler`s allows the user to zoom, pitch and rotate the map using two fingers

## Hierarchy

- **`TwoFingersTouchHandler`**

  ↳ [`TwoFingersTouchZoomHandler`](TwoFingersTouchZoomHandler.md)

  ↳ [`TwoFingersTouchRotateHandler`](TwoFingersTouchRotateHandler.md)

  ↳ [`TwoFingersTouchPitchHandler`](TwoFingersTouchPitchHandler.md)

## Implements

- [`Handler`](../interfaces/Handler.md)

## Methods

### disable

▸ **disable**(): `void`

Disables the "drag to pitch" interaction.

#### Returns

`void`

**`Example`**

```ts
map.touchPitch.disable();
```

#### Implementation of

Handler.disable

#### Defined in

src/ui/handler/two_fingers_touch.ts:109

___

### enable

▸ **enable**(`options?`): `void`

Enables the "drag to pitch" interaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](../types/AroundCenterOptions.md) |

#### Returns

`void`

**`Example`**

```ts
map.touchPitch.enable();
```

#### Implementation of

Handler.enable

#### Defined in

src/ui/handler/two_fingers_touch.ts:96

___

### isActive

▸ **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is active, i.e. currently being used.

#### Returns

`boolean`

`true` if the "drag to pitch" interaction is active.

#### Implementation of

[Handler](../interfaces/Handler.md).[isActive](../interfaces/Handler.md#isactive)

#### Defined in

src/ui/handler/two_fingers_touch.ts:128

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is enabled.

#### Returns

`boolean`

`true` if the "drag to pitch" interaction is enabled.

#### Implementation of

Handler.isEnabled

#### Defined in

src/ui/handler/two_fingers_touch.ts:119
