# Class: EdgeInsets

An `EdgeInset` object represents screen space padding applied to the edges of the viewport.
This shifts the apprent center or the vanishing point of the map. This is useful for adding floating UI elements
on top of the map and having the vanishing point shift as UI elements resize.

## Methods

### getCenter

▸ **getCenter**(`width`, `height`): `Point`

Utility method that computes the new apprent center or vanishing point after applying insets.
This is in pixels and with the top left being (0.0) and +y being downwards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | the width |
| `height` | `number` | the height |

#### Returns

`Point`

the point

#### Defined in

src/geo/edge_insets.ts:70

___

### interpolate

▸ **interpolate**(`start`, `target`, `t`): [`EdgeInsets`](EdgeInsets.md)

Interpolates the inset in-place.
This maintains the current inset value for any inset not present in `target`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`EdgeInsets`](EdgeInsets.md) \| [`PaddingOptions`](../types/PaddingOptions.md) | interpolation start |
| `target` | [`PaddingOptions`](../types/PaddingOptions.md) | interpolation target |
| `t` | `number` | interpolation step/weight |

#### Returns

[`EdgeInsets`](EdgeInsets.md)

the insets

#### Defined in

src/geo/edge_insets.ts:53

___

### toJSON

▸ **toJSON**(): [`PaddingOptions`](../types/PaddingOptions.md)

Returns the current state as json, useful when you want to have a
read-only representation of the inset.

#### Returns

[`PaddingOptions`](../types/PaddingOptions.md)

state as json

#### Defined in

src/geo/edge_insets.ts:95

## Properties

### bottom

• **bottom**: `number`

**`Default Value`**

```ts
0
```

#### Defined in

src/geo/edge_insets.ts:20

___

### left

• **left**: `number`

**`Default Value`**

```ts
0
```

#### Defined in

src/geo/edge_insets.ts:24

___

### right

• **right**: `number`

**`Default Value`**

```ts
0
```

#### Defined in

src/geo/edge_insets.ts:28

___

### top

• **top**: `number`

**`Default Value`**

```ts
0
```

#### Defined in

src/geo/edge_insets.ts:16
