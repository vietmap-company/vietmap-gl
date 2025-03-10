# Function: getMaxParallelImageRequests

▸ **getMaxParallelImageRequests**(): `number`

Gets and sets the maximum number of images (raster tiles, sprites, icons) to load in parallel,
which affects performance in raster-heavy maps. 16 by default.

#### Returns

`number`

Number of parallel requests currently configured.

**`Example`**

```ts
getMaxParallelImageRequests();
```

#### Defined in

src/index.ts:120
