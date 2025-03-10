# Function: setRTLTextPlugin

▸ **setRTLTextPlugin**(`pluginURL`, `lazy`): `Promise`\<`void`\>

Sets the map's [RTL text plugin](https://www.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-rtl-text).
Necessary for supporting the Arabic and Hebrew languages, which are written right-to-left.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginURL` | `string` | URL pointing to the Mapbox RTL text plugin source. |
| `lazy` | `boolean` | If set to `true`, mapboxgl will defer loading the plugin until rtl text is encountered, rtl text will then be rendered only after the plugin finishes loading. |

#### Returns

`Promise`\<`void`\>

**`Example`**

```ts
setRTLTextPlugin('https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.js', false);
```

**`See`**

[Add support for right-to-left scripts]

#### Defined in

src/index.ts:66
