# Type alias: AddProtocolAction

Ƭ **AddProtocolAction**: (`requestParameters`: [`RequestParameters`](RequestParameters.md), `abortController`: `AbortController`) => `Promise`\<[`GetResourceResponse`](GetResourceResponse.md)\<`any`\>\>

This method type is used to register a protocol handler.
Use the abort controller for aborting requests.
Return a promise with the relevant resource response.

#### Type declaration

▸ (`requestParameters`, `abortController`): `Promise`\<[`GetResourceResponse`](GetResourceResponse.md)\<`any`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RequestParameters`](RequestParameters.md) |
| `abortController` | `AbortController` |

##### Returns

`Promise`\<[`GetResourceResponse`](GetResourceResponse.md)\<`any`\>\>

#### Defined in

src/util/config.ts:8
