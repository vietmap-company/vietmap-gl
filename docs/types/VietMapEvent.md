# Type alias: VietMapEvent\<TOrig\>

Ƭ **VietMapEvent**\<`TOrig`\>: `Object`

The base event for VietMap

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOrig` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `originalEvent` | `TOrig` |
| `target` | [`Map`](../classes/Map.md) |
| `type` | keyof [`MapEventType`](MapEventType.md) \| keyof [`MapLayerEventType`](MapLayerEventType.md) |

#### Defined in

src/ui/events.ts:421
