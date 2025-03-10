# Class: DEMData

DEMData is a data structure for decoding, backfilling, and storing elevation data for processing in the hillshade shaders
data can be populated either from a pngraw image tile or from serliazed data sent back from a worker. When data is initially
loaded from a image tile, we decode the pixel values using the appropriate decoding formula, but we store the
elevation data as an Int32 value. we add 65536 (2^16) to eliminate negative values and enable the use of
integer overflow when creating the texture used in the hillshadePrepare step.

DEMData also handles the backfilling of data from a tile's neighboring tiles. This is necessary because we use a pixel's 8
surrounding pixel values to compute the slope at that pixel, and we cannot accurately calculate the slope at pixels on a
tile's edge without backfilling from neighboring tiles.

## Constructors

### constructor

• **new DEMData**(`uid`, `data`, `encoding`, `redFactor?`, `greenFactor?`, `blueFactor?`, `baseShift?`): [`DEMData`](DEMData.md)

Constructs a `DEMData` object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uid` | `string` \| `number` | `undefined` | the tile's unique id |
| `data` | `ImageData` \| [`RGBAImage`](RGBAImage.md) | `undefined` | RGBAImage data has uniform 1px padding on all sides: square tile edge size defines stride // and dim is calculated as stride - 2. |
| `encoding` | [`DEMEncoding`](../types/DEMEncoding.md) | `undefined` | the encoding type of the data |
| `redFactor` | `number` | `1.0` | the red channel factor used to unpack the data, used for `custom` encoding only |
| `greenFactor` | `number` | `1.0` | the green channel factor used to unpack the data, used for `custom` encoding only |
| `blueFactor` | `number` | `1.0` | the blue channel factor used to unpack the data, used for `custom` encoding only |
| `baseShift` | `number` | `0.0` | the base shift used to unpack the data, used for `custom` encoding only |

#### Returns

[`DEMData`](DEMData.md)

#### Defined in

src/data/dem_data.ts:45
