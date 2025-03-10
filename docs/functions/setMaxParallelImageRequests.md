# Function: setMaxParallelImageRequests

▸ **setMaxParallelImageRequests**(`numRequests`): `void`

Sets the maximum number of images (raster tiles, sprites, icons) to load in parallel,
which affects performance in raster-heavy maps. 16 by default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `numRequests` | `number` |

#### Returns

`void`

**`Example`**

```ts
setMaxParallelImageRequests(10);
```

#### Defined in

src/index.ts:130
