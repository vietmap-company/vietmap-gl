# Type alias: MapDataEvent

Ƭ **MapDataEvent**: `Object`

A `MapDataEvent` object is emitted with the `data`
and `dataloading` events. Possible values for
`dataType`s are:

- `'source'`: The non-tile data associated with any source
- `'style'`: The [style] used by the map

Possible values for `sourceDataType`s are:

- `'metadata'`: indicates that any necessary source metadata has been loaded (such as TileJSON) and it is ok to start loading tiles
- `'content'`: indicates the source data has changed (such as when source.setData() has been called on GeoJSONSource)
- `'visibility'`: send when the source becomes used when at least one of its layers becomes visible in style sense (inside the layer's zoom range and with layout.visibility set to 'visible')
- `'idle'`: indicates that no new source data has been fetched (but the source has done loading)

**`Example`**

```ts
// The sourcedata event is an example of MapDataEvent.
// Set up an event listener on the map.
map.on('sourcedata', function(e) {
   if (e.isSourceLoaded) {
       // Do something when the source has finished loading
   }
});
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataType` | `string` | The type of data that has changed. One of `'source'`, `'style'`. |
| `sourceDataType` | [`MapSourceDataType`](MapSourceDataType.md) | Included if the event has a `dataType` of `source` and the event signals that internal data has been received or changed. Possible values are `metadata`, `content`, `visibility` and `idle`. |
| `type` | `string` | The event type. |

#### Defined in

src/ui/events.ts:707
