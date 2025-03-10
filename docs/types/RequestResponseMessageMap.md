# Type alias: RequestResponseMessageMap

Ƭ **RequestResponseMessageMap**: `Object`

This is basically a mapping between all the calls that are made to and from the workers.
The key is the event name, the first parameter is the event input type, and the last parameter is the output type.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AT` | [[`TileParameters`](TileParameters.md), `void`] |
| `GCC` | [[`ClusterIDAndSource`](ClusterIDAndSource.md), `GeoJSON.Feature`[]] |
| `GCEZ` | [[`ClusterIDAndSource`](ClusterIDAndSource.md), `number`] |
| `GCL` | [[`GetClusterLeavesParams`](GetClusterLeavesParams.md), `GeoJSON.Feature`[]] |
| `GG` | [[`GetGlyphsParamerters`](GetGlyphsParamerters.md), [`GetGlyphsResponse`](GetGlyphsResponse.md)] |
| `GI` | [[`GetImagesParamerters`](GetImagesParamerters.md), [`GetImagesResponse`](GetImagesResponse.md)] |
| `GR` | [[`RequestParameters`](RequestParameters.md), [`GetResourceResponse`](GetResourceResponse.md)\<`any`\>] |
| `IS` | [`string`, `void`] |
| `LD` | [[`LoadGeoJSONParameters`](LoadGeoJSONParameters.md), [`GeoJSONWorkerSourceLoadDataResult`](GeoJSONWorkerSourceLoadDataResult.md)] |
| `LDT` | [[`WorkerDEMTileParameters`](WorkerDEMTileParameters.md), [`DEMData`](../classes/DEMData.md)] |
| `LT` | [[`WorkerTileParameters`](WorkerTileParameters.md), [`WorkerTileResult`](WorkerTileResult.md)] |
| `RDT` | [[`TileParameters`](TileParameters.md), `void`] |
| `RM` | [`undefined`, `void`] |
| `RMT` | [[`TileParameters`](TileParameters.md), `void`] |
| `RS` | [[`RemoveSourceParams`](RemoveSourceParams.md), `void`] |
| `RT` | [[`WorkerTileParameters`](WorkerTileParameters.md), [`WorkerTileResult`](WorkerTileResult.md)] |
| `SI` | [`string`[], `void`] |
| `SL` | [`LayerSpecification`[], `void`] |
| `SR` | [`string`, `void`] |
| `SRPS` | [[`PluginState`](PluginState.md), [`PluginState`](PluginState.md)] |
| `UL` | [[`UpdateLayersParamaeters`](UpdateLayersParamaeters.md), `void`] |

#### Defined in

src/util/actor_messages.ts:114
