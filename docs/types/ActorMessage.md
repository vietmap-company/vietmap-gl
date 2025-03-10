# Type alias: ActorMessage\<T\>

Ƭ **ActorMessage**\<`T`\>: `Object`

The message to be sent by the actor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MessageType`](../enums/MessageType.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`RequestResponseMessageMap`](RequestResponseMessageMap.md)[`T`][``0``] |
| `mustQueue?` | `boolean` |
| `sourceMapId?` | `string` \| `number` \| ``null`` |
| `targetMapId?` | `string` \| `number` \| ``null`` |
| `type` | `T` |

#### Defined in

src/util/actor_messages.ts:141
