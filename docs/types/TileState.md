# Type alias: TileState

Ƭ **TileState**: ``"loading"`` \| ``"loaded"`` \| ``"reloading"`` \| ``"unloaded"`` \| ``"errored"`` \| ``"expired"``

The tile's state, can be:

- `loading` Tile data is in the process of loading.
- `loaded` Tile data has been loaded. Tile can be rendered.
- `reloading` Tile data has been loaded and is being updated. Tile can be rendered.
- `unloaded` Tile data has been deleted.
- `errored` Tile data was not loaded because of an error.
- `expired` Tile data was previously loaded, but has expired per its HTTP headers and is in the process of refreshing.

#### Defined in

src/source/tile.ts:47
