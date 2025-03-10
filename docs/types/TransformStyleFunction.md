# Type alias: TransformStyleFunction

Ƭ **TransformStyleFunction**: (`previous`: `StyleSpecification` \| `undefined`, `next`: `StyleSpecification`) => `StyleSpecification`

Part of [Map#setStyle](../classes/Map.md#setstyle) options, transformStyle is a convenience function that allows to modify a style after it is fetched but before it is committed to the map state
this function exposes previous and next styles, it can be commonly used to support a range of functionalities like:
     when previous style carries certain 'state' that needs to be carried over to a new style gracefully
     when a desired style is a certain combination of previous and incoming style
     when an incoming style requires modification based on external state

**`Example`**

```ts
map.setStyle('https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}', {
  transformStyle: (previousStyle, nextStyle) => ({
      ...nextStyle,
      sources: {
          ...nextStyle.sources,
          // copy a source from previous style
          'osm': previousStyle.sources.osm
      },
      layers: [
          // background layer
          nextStyle.layers[0],
          // copy a layer from previous style
          previousStyle.layers[0],
          // other layers from the next style
          ...nextStyle.layers.slice(1).map(layer => {
              // hide the layers we don't need from demotiles style
              if (layer.id.startsWith('geolines')) {
                  layer.layout = {...layer.layout || {}, visibility: 'none'};
              // filter out US polygons
              } else if (layer.id.startsWith('coastline') || layer.id.startsWith('countries')) {
                  layer.filter = ['!=', ['get', 'ADM0_A3'], 'USA'];
              }
              return layer;
          })
      ]
  })
});
```

#### Type declaration

▸ (`previous`, `next`): `StyleSpecification`

##### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | `StyleSpecification` \| `undefined` |
| `next` | `StyleSpecification` |

##### Returns

`StyleSpecification`

#### Defined in

src/style/style.ts:152
