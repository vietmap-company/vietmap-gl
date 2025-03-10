# Type alias: CameraUpdateTransformFunction

Ƭ **CameraUpdateTransformFunction**: (`next`: \{ `bearing`: `number` ; `center`: [`LngLat`](../classes/LngLat.md) ; `elevation`: `number` ; `pitch`: `number` ; `zoom`: `number`  }) => \{ `bearing?`: `number` ; `center?`: [`LngLat`](../classes/LngLat.md) ; `elevation?`: `number` ; `pitch?`: `number` ; `zoom?`: `number`  }

A callback hook that allows manipulating the camera and being notified about camera updates before they happen

#### Type declaration

▸ (`next`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `Object` |
| `next.bearing` | `number` |
| `next.center` | [`LngLat`](../classes/LngLat.md) |
| `next.elevation` | `number` |
| `next.pitch` | `number` |
| `next.zoom` | `number` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bearing?` | `number` |
| `center?` | [`LngLat`](../classes/LngLat.md) |
| `elevation?` | `number` |
| `pitch?` | `number` |
| `zoom?` | `number` |

#### Defined in

src/ui/camera.ts:228
