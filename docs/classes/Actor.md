# Class: Actor

An implementation of the [Actor design pattern](http://en.wikipedia.org/wiki/Actor_model)
that maintains the relationship between asynchronous tasks and the objects
that spin them off - in this case, tasks like parsing parts of styles,
owned by the styles

## Implements

- [`IActor`](../interfaces/IActor.md)

## Constructors

### constructor

• **new Actor**(`target`, `mapId?`): [`Actor`](Actor.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`ActorTarget`](../interfaces/ActorTarget.md) | The target |
| `mapId?` | `string` \| `number` | A unique identifier for the Map instance using this Actor. |

#### Returns

[`Actor`](Actor.md)

#### Defined in

src/util/actor.ts:71

## Methods

### sendAsync

▸ **sendAsync**\<`T`\>(`message`, `abortController?`): `Promise`\<[`RequestResponseMessageMap`](../types/RequestResponseMessageMap.md)[`T`][``1``]\>

Sends a message from a main-thread map to a Worker or from a Worker back to
a main-thread map instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MessageType`](../enums/MessageType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`ActorMessage`](../types/ActorMessage.md)\<`T`\> | the message to send |
| `abortController?` | `AbortController` | an optional AbortController to abort the request |

#### Returns

`Promise`\<[`RequestResponseMessageMap`](../types/RequestResponseMessageMap.md)[`T`][``1``]\>

a promise that will be resolved with the response data

#### Implementation of

IActor.sendAsync

#### Defined in

src/util/actor.ts:95
