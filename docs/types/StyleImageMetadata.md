# Type alias: StyleImageMetadata

Ƭ **StyleImageMetadata**: `Object`

The style's image metadata

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `content?` | [`number`, `number`, `number`, `number`] | If `icon-text-fit` is used in a layer with this image, this option defines the part of the image that can be covered by the content in `text-field`. |
| `pixelRatio` | `number` | The ratio of pixels in the image to physical pixels on the screen |
| `sdf` | `boolean` | Whether the image should be interpreted as an SDF image |
| `stretchX?` | [`number`, `number`][] | If `icon-text-fit` is used in a layer with this image, this option defines the part(s) of the image that can be stretched horizontally. |
| `stretchY?` | [`number`, `number`][] | If `icon-text-fit` is used in a layer with this image, this option defines the part(s) of the image that can be stretched vertically. |

#### Defined in

src/style/style_image.ts:37
