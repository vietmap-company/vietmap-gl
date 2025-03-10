# Class: DoubleClickZoomHandler

The `DoubleClickZoomHandler` allows the user to zoom the map at a point by
double clicking or double tapping.

## Methods

### disable

▸ **disable**(): `void`

Disables the "double click to zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.doubleClickZoom.disable();
```

#### Defined in

src/ui/handler/shim/dblclick_zoom.ts:42

___

### enable

▸ **enable**(): `void`

Enables the "double click to zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.doubleClickZoom.enable();
```

#### Defined in

src/ui/handler/shim/dblclick_zoom.ts:29

___

### isActive

▸ **isActive**(): `boolean`

Returns a Boolean indicating whether the "double click to zoom" interaction is active, i.e. currently being used.

#### Returns

`boolean`

`true` if the "double click to zoom" interaction is active.

#### Defined in

src/ui/handler/shim/dblclick_zoom.ts:61

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "double click to zoom" interaction is enabled.

#### Returns

`boolean`

`true` if the "double click to zoom" interaction is enabled.

#### Defined in

src/ui/handler/shim/dblclick_zoom.ts:52
