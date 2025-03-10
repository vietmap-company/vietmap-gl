# Function: prewarm

▸ **prewarm**(): `void`

Initializes resources like WebWorkers that can be shared across maps to lower load
times in some situations. `setWorkerUrl()` and `setWorkerCount()`, if being
used, must be set before `prewarm()` is called to have an effect.

By default, the lifecycle of these resources is managed automatically, and they are
lazily initialized when a Map is first created. By invoking `prewarm()`, these
resources will be created ahead of time, and will not be cleared when the last Map
is removed from the page. This allows them to be re-used by new Map instances that
are created later. They can be manually cleared by calling
`clearPrewarmedResources()`. This is only necessary if your web page remains
active but stops using maps altogether.

This is primarily useful when using GL-JS maps in a single page app, wherein a user
would navigate between various views that can cause Map instances to constantly be
created and destroyed.

#### Returns

`void`

**`Example`**

```ts
prewarm()
```

#### Defined in

src/util/global_worker_pool.ts:38
