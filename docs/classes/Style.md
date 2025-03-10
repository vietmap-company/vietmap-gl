# Class: Style

The Style base class

## Hierarchy

- [`Evented`](Evented.md)

  ↳ **`Style`**

## Events

### removeLayer

▸ **removeLayer**(`id`): `void`

Remove the layer with the given id from the style.

If no such layer exists, an `error` event is fired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the layer to remove `error` - Fired if the layer does not exist |

#### Returns

`void`

#### Defined in

src/style/style.ts:1002

## Methods

### \_serializeByIds

▸ **_serializeByIds**(`ids?`): `LayerSpecification`[]

take an array of string IDs, and based on this._layers, generate an array of LayerSpecification

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids?` | `string`[] | an array of string IDs, for which serialized layers will be generated. If omitted, all serialized layers will be returned |

#### Returns

`LayerSpecification`[]

generated result

#### Defined in

src/style/style.ts:478

___

### \_serializedAllLayers

▸ **_serializedAllLayers**(): `Object`

Lazy initialization of this._serializedLayers dictionary and return it

#### Returns

`Object`

this._serializedLayers dictionary

#### Defined in

src/style/style.ts:500

___

### addLayer

▸ **addLayer**(`layerObject`, `before?`, `options?`): `this`

Add a layer to the map style. The layer will be inserted before the layer with
ID `before`, or appended if `before` is omitted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerObject` | [`AddLayerObject`](../types/AddLayerObject.md) | The style layer to add. |
| `before?` | `string` | ID of an existing layer to insert before |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | Style setter options. |

#### Returns

`this`

`this`.

#### Defined in

src/style/style.ts:892

___

### addSprite

▸ **addSprite**(`id`, `url`, `options?`, `completion?`): `void`

Add a sprite.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the desired sprite |
| `url` | `string` | The url to load the desired sprite from |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | The style setter options |
| `completion?` | (`err`: `Error`) => `void` | The completion handler |

#### Returns

`void`

#### Defined in

src/style/style.ts:1663

___

### getFilter

▸ **getFilter**(`layer`): `void` \| `FilterSpecification`

Get a layer's filter object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `string` | the layer to inspect |

#### Returns

`void` \| `FilterSpecification`

the layer's filter, if any

#### Defined in

src/style/style.ts:1113

___

### getLayer

▸ **getLayer**(`id`): [`StyleLayer`](StyleLayer.md)

Return the style layer object with the given `id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the desired layer |

#### Returns

[`StyleLayer`](StyleLayer.md)

a layer, if one with the given `id` exists

#### Defined in

src/style/style.ts:1038

___

### getLayersOrder

▸ **getLayersOrder**(): `string`[]

Return the ids of all layers currently in the style, including custom layers, in order.

#### Returns

`string`[]

ids of layers, in order

#### Defined in

src/style/style.ts:1047

___

### getLayoutProperty

▸ **getLayoutProperty**(`layerId`, `name`): `any`

Get a layout property's value from a given layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layerId` | `string` | the layer to inspect |
| `name` | `string` | the name of the layout property |

#### Returns

`any`

the property value

#### Defined in

src/style/style.ts:1138

___

### getSource

▸ **getSource**(`id`): [`Source`](../interfaces/Source.md)

Get a source by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the desired source |

#### Returns

[`Source`](../interfaces/Source.md)

source

#### Defined in

src/style/style.ts:880

___

### getSprite

▸ **getSprite**(): \{ `id`: `string` ; `url`: `string`  }[]

Get the current sprite value.

#### Returns

\{ `id`: `string` ; `url`: `string`  }[]

empty array when no sprite is set; id-url pairs otherwise

#### Defined in

src/style/style.ts:1716

___

### hasLayer

▸ **hasLayer**(`id`): `boolean`

Checks if a specific layer is present within the style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the desired layer |

#### Returns

`boolean`

a boolean specifying if the given layer is present

#### Defined in

src/style/style.ts:1057

___

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

### moveLayer

▸ **moveLayer**(`id`, `before?`): `void`

Moves a layer to a different z-position. The layer will be inserted before the layer with
ID `before`, or appended if `before` is omitted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the layer to move |
| `before?` | `string` | ID of an existing layer to insert before |

#### Returns

`void`

#### Defined in

src/style/style.ts:967

___

### off

▸ **off**(`type`, `listener`): [`Style`](Style.md)

Removes a previously registered event listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../types/Listener.md) | The listener function to remove. |

#### Returns

[`Style`](Style.md)

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

▸ **once**(`type`, `listener?`): `Promise`\<`any`\> \| [`Style`](Style.md)

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../types/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| [`Style`](Style.md)

`this` or a promise if a listener is not provided

#### Inherited from

[Evented](Evented.md).[once](Evented.md#once)

#### Defined in

src/util/evented.ts:104

___

### removeSource

▸ **removeSource**(`id`): `this`

Remove a source from this stylesheet, given its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the source to remove |

#### Returns

`this`

`this`.

**`Throws`**

if no source is found with the given ID

#### Defined in

src/style/style.ts:838

___

### removeSprite

▸ **removeSprite**(`id`): `void`

Remove a sprite by its id. When the last sprite is removed, the whole `this.stylesheet.sprite` object becomes
`undefined`. This falsy `undefined` value later prevents attempts to load the sprite when it's absent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the sprite to remove |

#### Returns

`void`

#### Defined in

src/style/style.ts:1684

___

### setEventedParent

▸ **setEventedParent**(`parent?`, `data?`): [`Style`](Style.md)

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Evented`](Evented.md) |
| `data?` | `any` |

#### Returns

[`Style`](Style.md)

`this`

#### Inherited from

[Evented](Evented.md).[setEventedParent](Evented.md#seteventedparent)

#### Defined in

src/util/evented.ts:175

___

### setGeoJSONSourceData

▸ **setGeoJSONSourceData**(`id`, `data`): `void`

Set the data of a GeoJSON source, given its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the source |
| `data` | `string` \| `GeoJSON`\<`Geometry`, \{ `[name: string]`: `any`;  }\> | GeoJSON source |

#### Returns

`void`

#### Defined in

src/style/style.ts:864

___

### setSprite

▸ **setSprite**(`sprite`, `options?`, `completion?`): `void`

Set a new value for the style's sprite.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sprite` | `SpriteSpecification` | new sprite value |
| `options` | [`StyleSetterOptions`](../types/StyleSetterOptions.md) | style setter options |
| `completion?` | (`err`: `Error`) => `void` | the completion handler |

#### Returns

`void`

#### Defined in

src/style/style.ts:1727

___

### setState

▸ **setState**(`nextState`, `options?`): `boolean`

Update this style's state to match the given style JSON, performing only
the necessary mutations.

May throw an Error ('Unimplemented: METHOD') if the mapbox-gl-style-spec
diff algorithm produces an operation that is not supported.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextState` | `StyleSpecification` |
| `options` | [`StyleSwapOptions`](../types/StyleSwapOptions.md) & [`StyleSetterOptions`](../types/StyleSetterOptions.md) |

#### Returns

`boolean`

true if any changes were made; false otherwise

#### Defined in

src/style/style.ts:669
