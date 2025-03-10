# Function: setWorkerCount

▸ **setWorkerCount**(`count`): `void`

Sets the number of web workers instantiated on a page with GL JS maps.
By default, workerCount is 1 except for Safari browser where it is set to half the number of CPU cores (capped at 3).
Make sure to set this property before creating any map instances for it to have effect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

**`Example`**

```ts
setWorkerCount(2);
```

#### Defined in

src/index.ts:109
