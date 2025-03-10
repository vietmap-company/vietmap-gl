# Function: clearPrewarmedResources

▸ **clearPrewarmedResources**(): `void`

Clears up resources that have previously been created by `prewarm()`.
Note that this is typically not necessary. You should only call this function
if you expect the user of your app to not return to a Map view at any point
in your application.

#### Returns

`void`

**`Example`**

```ts
clearPrewarmedResources()
```

#### Defined in

src/util/global_worker_pool.ts:54
