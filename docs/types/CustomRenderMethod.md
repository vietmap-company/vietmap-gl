# Type alias: CustomRenderMethod

Ƭ **CustomRenderMethod**: (`gl`: `WebGLRenderingContext` \| `WebGL2RenderingContext`, `matrix`: `mat4`) => `void`

#### Type declaration

▸ (`gl`, `matrix`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` | The map's gl context. |
| `matrix` | `mat4` | The map's camera matrix. It projects spherical mercator coordinates to gl clip space coordinates. The spherical mercator coordinate `[0, 0]` represents the top left corner of the mercator world and `[1, 1]` represents the bottom right corner. When the `renderingMode` is `"3d"`, the z coordinate is conformal. A box with identical x, y, and z lengths in mercator units would be rendered as a cube. [MercatorCoordinate.fromLngLat](../classes/MercatorCoordinate.md#fromlnglat) can be used to project a `LngLat` to a mercator coordinate. |

##### Returns

`void`

#### Defined in

src/style/style_layer/custom_style_layer.ts:15
