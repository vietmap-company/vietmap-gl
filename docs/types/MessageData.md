# Type alias: MessageData

Ƭ **MessageData**: `Object`

This is used to define the parameters of the message that is sent to the worker and back

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | [`Serialized`](Serialized.md) |
| `error?` | [`Serialized`](Serialized.md) \| ``null`` |
| `id` | `string` |
| `mustQueue?` | `boolean` |
| `origin` | `string` |
| `sourceMapId` | `string` \| `number` \| ``null`` |
| `targetMapId?` | `string` \| `number` \| ``null`` |
| `type` | [`MessageType`](../enums/MessageType.md) \| ``"<cancel>"`` \| ``"<response>"`` |

#### Defined in

src/util/actor.ts:23
