# Function: addSourceType

▸ **addSourceType**(`name`, `SourceType`): `Promise`\<`void`\>

Adds a [custom source type](#Custom Sources), making it available for use with
[Map#addSource](../classes/Map.md#addsource).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the source type; source definition objects use this name in the `{type: ...}` field. |
| `SourceType` | [`SourceClass`](../types/SourceClass.md) | - |

#### Returns

`Promise`\<`void`\>

a promise that is resolved when the source type is ready or rejected with an error.

#### Defined in

src/source/source.ts:182
