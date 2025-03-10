# Type alias: CanvasSourceSpecification

Ƭ **CanvasSourceSpecification**: `Object`

Options to add a canvas source type to the map.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `animate?` | `boolean` | Whether the canvas source is animated. If the canvas is static (i.e. pixels do not need to be re-read on every frame), `animate` should be set to `false` to improve performance. **`Default Value`** ```ts true ``` |
| `canvas?` | `string` \| `HTMLCanvasElement` | Canvas source from which to read pixels. Can be a string representing the ID of the canvas element, or the `HTMLCanvasElement` itself. |
| `coordinates` | [[`number`, `number`], [`number`, `number`], [`number`, `number`], [`number`, `number`]] | Four geographical coordinates denoting where to place the corners of the canvas, specified in `[longitude, latitude]` pairs. |
| `type` | ``"canvas"`` | Source type. Must be `"canvas"`. |

#### Defined in

src/source/canvas_source.ts:16
