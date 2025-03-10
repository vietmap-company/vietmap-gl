# Type alias: VietMapZoomEvent

Ƭ **VietMapZoomEvent**: `Object`

A `VietMapZoomEvent` is the event type for the boxzoom-related map events emitted by the [BoxZoomHandler](../classes/BoxZoomHandler.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `originalEvent` | `MouseEvent` | The DOM event that triggered the boxzoom event. Can be a `MouseEvent` or `KeyboardEvent` |
| `target` | [`Map`](../classes/Map.md) | The `Map` instance that triggered the event |
| `type` | ``"boxzoomstart"`` \| ``"boxzoomend"`` \| ``"boxzoomcancel"`` | The type of boxzoom event. One of `boxzoomstart`, `boxzoomend` or `boxzoomcancel` |

#### Defined in

src/ui/events.ts:664
