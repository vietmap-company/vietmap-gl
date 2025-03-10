# Class: TwoFingersTouchRotateHandler

The `TwoFingersTouchHandler`s allows the user to rotate the map two fingers

## Hierarchy

- [`TwoFingersTouchHandler`](TwoFingersTouchHandler.md)

  ↳ **`TwoFingersTouchRotateHandler`**

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

#### Inherited from

[TwoFingersTouchHandler](TwoFingersTouchHandler.md).[disable](TwoFingersTouchHandler.md#disable)

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

#### Inherited from

[TwoFingersTouchHandler](TwoFingersTouchHandler.md).[enable](TwoFingersTouchHandler.md#enable)

#### Defined in

src/ui/handler/two_fingers_touch.ts:96

___

### isActive

▸ **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is active, i.e. currently being used.

#### Returns

`boolean`

`true` if the "drag to pitch" interaction is active.

#### Inherited from

[TwoFingersTouchHandler](TwoFingersTouchHandler.md).[isActive](TwoFingersTouchHandler.md#isactive)

#### Defined in

src/ui/handler/two_fingers_touch.ts:128

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is enabled.

#### Returns

`boolean`

`true` if the "drag to pitch" interaction is enabled.

#### Inherited from

[TwoFingersTouchHandler](TwoFingersTouchHandler.md).[isEnabled](TwoFingersTouchHandler.md#isenabled)

#### Defined in

src/ui/handler/two_fingers_touch.ts:119
