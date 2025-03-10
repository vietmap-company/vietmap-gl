# Type alias: RequestTransformFunction

Ƭ **RequestTransformFunction**: (`url`: `string`, `resourceType?`: [`ResourceType`](../enums/ResourceType.md)) => [`RequestParameters`](RequestParameters.md) \| `undefined`

This function is used to tranform a request.
It is used just before executing the relevant request.

#### Type declaration

▸ (`url`, `resourceType?`): [`RequestParameters`](RequestParameters.md) \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `resourceType?` | [`ResourceType`](../enums/ResourceType.md) |

##### Returns

[`RequestParameters`](RequestParameters.md) \| `undefined`

#### Defined in

src/util/request_manager.ts:21
