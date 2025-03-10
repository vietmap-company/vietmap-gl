# Class: Dispatcher

Responsible for sending messages from a [Source](../interfaces/Source.md) to an associated
WorkerSource.

## Methods

### broadcast

▸ **broadcast**\<`T`\>(`type`, `data`): `Promise`\<[`RequestResponseMessageMap`](../types/RequestResponseMessageMap.md)[`T`][``1``][]\>

Broadcast a message to all Workers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MessageType`](../enums/MessageType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `data` | [`RequestResponseMessageMap`](../types/RequestResponseMessageMap.md)[`T`][``0``] |

#### Returns

`Promise`\<[`RequestResponseMessageMap`](../types/RequestResponseMessageMap.md)[`T`][``1``][]\>

#### Defined in

src/util/dispatcher.ts:38

___

### getActor

▸ **getActor**(): [`Actor`](Actor.md)

Acquires an actor to dispatch messages to. The actors are distributed in round-robin fashion.

#### Returns

[`Actor`](Actor.md)

An actor object backed by a web worker for processing messages.

#### Defined in

src/util/dispatcher.ts:50
