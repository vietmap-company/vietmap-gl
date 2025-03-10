# Class: RGBAImage

An object to store image data not premultiplied, because ImageData is not premultiplied.
UNPACK_PREMULTIPLY_ALPHA_WEBGL must be used when uploading to a texture.

## Properties

### data

• **data**: `Uint8Array`

data must be a Uint8Array instead of Uint8ClampedArray because texImage2D does not support Uint8ClampedArray in all browsers.

#### Defined in

src/util/image.ts:120
