# Function: getRTLTextPluginStatus

▸ **getRTLTextPluginStatus**(): `string`

Gets the map's [RTL text plugin](https://www.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-rtl-text) status.
The status can be `unavailable` (i.e. not requested or removed), `loading`, `loaded` or `error`.
If the status is `loaded` and the plugin is requested again, an error will be thrown.

#### Returns

`string`

**`Example`**

```ts
const pluginStatus = getRTLTextPluginStatus();
```

#### Defined in

src/index.ts:79
