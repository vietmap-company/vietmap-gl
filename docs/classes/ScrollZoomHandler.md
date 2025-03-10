# Class: ScrollZoomHandler

The `ScrollZoomHandler` allows the user to zoom the map by scrolling.

## Implements

- [`Handler`](../interfaces/Handler.md)

## Methods

### disable

▸ **disable**(): `void`

Disables the "scroll to zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.scrollZoom.disable();
```

#### Implementation of

Handler.disable

#### Defined in

src/ui/handler/scroll_zoom.ts:147

___

### enable

▸ **enable**(`options?`): `void`

Enables the "scroll to zoom" interaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](../types/AroundCenterOptions.md) | Options object. |

#### Returns

`void`

**`Example`**

```ts
map.scrollZoom.enable();
map.scrollZoom.enable({ around: 'center' })
```

#### Implementation of

Handler.enable

#### Defined in

src/ui/handler/scroll_zoom.ts:133

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "scroll to zoom" interaction is enabled.

#### Returns

`boolean`

`true` if the "scroll to zoom" interaction is enabled.

#### Implementation of

Handler.isEnabled

#### Defined in

src/ui/handler/scroll_zoom.ts:106

___

### setWheelZoomRate

▸ **setWheelZoomRate**(`wheelZoomRate`): `void`

Set the zoom rate of a mouse wheel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelZoomRate` | `number` | 1/450 The rate used to scale mouse wheel movement to a zoom value. |

#### Returns

`void`

**`Example`**

Slow down zoom of mouse wheel
```ts
map.scrollZoom.setWheelZoomRate(1/600);
```

#### Defined in

src/ui/handler/scroll_zoom.ts:98

___

### setZoomRate

▸ **setZoomRate**(`zoomRate`): `void`

Set the zoom rate of a trackpad

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoomRate` | `number` | 1/100 The rate used to scale trackpad movement to a zoom value. |

#### Returns

`void`

**`Example`**

Speed up trackpad zoom
```ts
map.scrollZoom.setZoomRate(1/25);
```

#### Defined in

src/ui/handler/scroll_zoom.ts:85
