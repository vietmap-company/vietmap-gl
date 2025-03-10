# Type alias: AddLayerObject

Ƭ **AddLayerObject**: `LayerSpecification` \| `Omit`\<`LayerSpecification`, ``"source"``\> & \{ `source`: `SourceSpecification`  } \| [`CustomLayerInterface`](../interfaces/CustomLayerInterface.md)

Specifies a layer to be added to a [Style](../classes/Style.md). In addition to a standard LayerSpecification
or a [CustomLayerInterface](../interfaces/CustomLayerInterface.md), a LayerSpecification with an embedded SourceSpecification can also be provided.

#### Defined in

src/style/style.ts:174
