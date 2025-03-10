# Type alias: DragPanOptions

Ƭ **DragPanOptions**: `Object`

A [DragPanHandler](../classes/DragPanHandler.md) options object

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deceleration?` | `number` | the maximum value of the drag velocity. **`Default Value`** ```ts 1400 ``` |
| `easing?` | (`t`: `number`) => `number` | - |
| `linearity?` | `number` | factor used to scale the drag velocity **`Default Value`** ```ts 0 ``` |
| `maxSpeed?` | `number` | the rate at which the speed reduces after the pan ends. **`Default Value`** ```ts 2500 ``` |

#### Defined in

src/ui/handler/shim/drag_pan.ts:7
