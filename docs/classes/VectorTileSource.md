# Class: VectorTileSource

A source containing vector tiles in [Mapbox Vector Tile format](https://docs.mapbox.com/vector-tiles/reference/).
(See the [Style Specification] for detailed documentation of options.)

**`Example`**

```ts
map.addSource('some id', {
    type: 'vector',
    url: 'https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}'
});
```

**`Example`**

```ts
map.addSource('some id', {
    type: 'vector',
    tiles: ['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
    minzoom: 6,
    maxzoom: 14
});
```

**`Example`**

```ts
map.getSource('some id').setUrl("https://maps.vietmap.vn/mt/tm/style.json?apikey={your-apikey}");
```

**`Example`**

```ts
map.getSource('some id').setTiles(['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt']);
```

**`See`**

[Add a vector tile source]

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`VectorTileSource`**

## Implements

- [`Source`](../interfaces/Source.md)

## Methods

### listens

▸ **listens**(`type`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type |

#### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

#### Inherited from

[Evented](Evented.md).[listens](Evented.md#listens)

#### Defined in

src/util/evented.ts:163

___

### off

▸ **off**(`type`, `listener`): [`VectorTileSource`](VectorTileSource.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`VectorTileSource`](VectorTileSource.md)

`this`

#### Inherited from

[Evented](Evented.md).[off](Evented.md#off)

#### Defined in

src/util/evented.ts:88

___

### on

▸ **on**(`type`, `listener`): `this`

Adds a listener to a specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

#### Returns

`this`

`this`

#### Inherited from

[Evented](Evented.md).[on](Evented.md#on)

#### Defined in

src/util/evented.ts:74

___

### once

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`VectorTileSource`](VectorTileSource.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`VectorTileSource`](VectorTileSource.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`VectorTileSource`](VectorTileSource.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`VectorTileSource`](VectorTileSource.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### setTiles

▸ **setTiles**(`tiles`): `this`

Sets the source `tiles` property and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tiles` | `string`[] | An array of one or more tile source URLs, as in the TileJSON spec. |

#### Returns

`this`

`this`

#### Defined in

src/source/vector_tile_source.ts:159

___

### setUrl

▸ **setUrl**(`url`): `this`

Sets the source `url` property and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | A URL to a TileJSON resource. Supported protocols are `http:` and `https:`. |

#### Returns

`this`

`this`

#### Defined in

src/source/vector_tile_source.ts:173
