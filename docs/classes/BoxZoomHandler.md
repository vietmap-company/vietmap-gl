# Class: BoxZoomHandler

The `BoxZoomHandler` allows the user to zoom the map to fit within a bounding box.
The bounding box is defined by clicking and holding `shift` while dragging the cursor.

## Implements

- [`Handler`](../interfaces/Handler.md)

## Methods

### disable

▸ **disable**(): `void`

Disables the "box zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.boxZoom.disable();
```

#### Implementation of

Handler.disable

#### Defined in

src/ui/handler/box_zoom.ts:78

___

### enable

▸ **enable**(): `void`

Enables the "box zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.boxZoom.enable();
```

#### Implementation of

Handler.enable

#### Defined in

src/ui/handler/box_zoom.ts:65

___

### isActive

▸ **isActive**(): `boolean`

Returns a Boolean indicating whether the "box zoom" interaction is active, i.e. currently being used.

#### Returns

`boolean`

`true` if the "box zoom" interaction is active.

#### Implementation of

[Handler](../interfaces/Handler.md).[isActive](../interfaces/Handler.md#isactive)

#### Defined in

src/ui/handler/box_zoom.ts:53

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "box zoom" interaction is enabled.

#### Returns

`boolean`

`true` if the "box zoom" interaction is enabled.

#### Implementation of

Handler.isEnabled

#### Defined in

src/ui/handler/box_zoom.ts:44
