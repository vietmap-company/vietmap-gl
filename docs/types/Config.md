# Type alias: Config

Ƭ **Config**: `Object`

This is a global config object used to store the configuration
It is available in the workers as well.
Only serializable data should be stored in it.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MAX_PARALLEL_IMAGE_REQUESTS` | `number` |
| `MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME` | `number` |
| `MAX_TILE_CACHE_ZOOM_LEVELS` | `number` |
| `REGISTERED_PROTOCOLS` | \{ `[x: string]`: [`AddProtocolAction`](AddProtocolAction.md);  } |
| `WORKER_URL` | `string` |

#### Defined in

src/util/config.ts:15
