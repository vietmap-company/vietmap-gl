# Class: DragRotateHandler

The `DragRotateHandler` allows the user to rotate the map by clicking and
dragging the cursor while holding the right mouse button or `ctrl` key.

## Methods

### disable

▸ **disable**(): `void`

Disables the "drag to rotate" interaction.

#### Returns

`void`

**`Example`**

```ts
map.dragRotate.disable();
```

#### Defined in

src/ui/handler/shim/drag_rotate.ts:54

___

### enable

▸ **enable**(): `void`

Enables the "drag to rotate" interaction.

#### Returns

`void`

**`Example`**

```ts
map.dragRotate.enable();
```

#### Defined in

src/ui/handler/shim/drag_rotate.ts:41

___

### isActive

▸ **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to rotate" interaction is active, i.e. currently being used.

#### Returns

`boolean`

`true` if the "drag to rotate" interaction is active.

#### Defined in

src/ui/handler/shim/drag_rotate.ts:73

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to rotate" interaction is enabled.

#### Returns

`boolean`

`true` if the "drag to rotate" interaction is enabled.

#### Defined in

src/ui/handler/shim/drag_rotate.ts:64
