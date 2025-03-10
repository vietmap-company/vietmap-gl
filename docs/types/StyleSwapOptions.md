# Type alias: StyleSwapOptions

Ƭ **StyleSwapOptions**: `Object`

The options object related to the [Map](../classes/Map.md)'s style related methods

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `diff?` | `boolean` | If false, force a 'full' update, removing the current style and building the given one instead of attempting a diff-based update. |
| `transformStyle?` | [`TransformStyleFunction`](TransformStyleFunction.md) | TransformStyleFunction is a convenience function that allows to modify a style after it is fetched but before it is committed to the map state. Refer to [TransformStyleFunction](TransformStyleFunction.md). |

#### Defined in

src/style/style.ts:157
