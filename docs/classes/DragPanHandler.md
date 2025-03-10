# Class: DragPanHandler

The `DragPanHandler` allows the user to pan the map by clicking and dragging
the cursor.

## Methods

### disable

▸ **disable**(): `void`

Disables the "drag to pan" interaction.

#### Returns

`void`

**`Example`**

```ts
map.dragPan.disable();
```

#### Defined in

src/ui/handler/shim/drag_pan.ts:81

___

### enable

▸ **enable**(`options?`): `void`

Enables the "drag to pan" interaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `boolean` \| [`DragPanOptions`](../types/DragPanOptions.md) | Options object |

#### Returns

`void`

**`Example`**

```ts
  map.dragPan.enable();
  map.dragPan.enable({
     linearity: 0.3,
     easing: bezier(0, 0, 0.3, 1),
     maxSpeed: 1400,
     deceleration: 2500,
  });
```

#### Defined in

src/ui/handler/shim/drag_pan.ts:66

___

### isActive

▸ **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pan" interaction is active, i.e. currently being used.

#### Returns

`boolean`

`true` if the "drag to pan" interaction is active.

#### Defined in

src/ui/handler/shim/drag_pan.ts:101

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pan" interaction is enabled.

#### Returns

`boolean`

`true` if the "drag to pan" interaction is enabled.

#### Defined in

src/ui/handler/shim/drag_pan.ts:92
