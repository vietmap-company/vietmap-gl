# Function: getWorkerCount

▸ **getWorkerCount**(): `number`

Gets the number of web workers instantiated on a page with GL JS maps.
By default, workerCount is 1 except for Safari browser where it is set to half the number of CPU cores (capped at 3).
Make sure to set this property before creating any map instances for it to have effect.

#### Returns

`number`

Number of workers currently configured.

**`Example`**

```ts
const workerCount = getWorkerCount()
```

#### Defined in

src/index.ts:98
