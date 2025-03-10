# Type alias: HandlerResult

Ƭ **HandlerResult**: `Object`

All handler methods that are called with events can optionally return a `HandlerResult`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `around?` | `Point` \| ``null`` | the point to not move when changing the camera |
| `bearingDelta?` | `number` | - |
| `cameraAnimation?` | (`map`: [`Map`](../classes/Map.md)) => `any` | - |
| `needsRenderFrame?` | `boolean` | Makes the manager trigger a frame, allowing the handler to return multiple results over time (see scrollzoom). |
| `noInertia?` | `boolean` | The camera changes won't get recorded for inertial zooming. |
| `originalEvent?` | [`Event`](../classes/Event.md) | The last three properties are needed by only one handler: scrollzoom. The DOM event to be used as the `originalEvent` on any camera change events. |
| `panDelta?` | `Point` | - |
| `pinchAround?` | `Point` \| ``null`` | same as above, except for pinch actions, which are given higher priority |
| `pitchDelta?` | `number` | - |
| `zoomDelta?` | `number` | - |

#### Defined in

src/ui/handler_manager.ts:80
