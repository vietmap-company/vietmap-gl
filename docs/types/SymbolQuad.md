# Type alias: SymbolQuad

Ƭ **SymbolQuad**: `Object`

A textured quad for rendering a single icon or glyph.

The zoom range the glyph can be shown is defined by minScale and maxScale.

**`Param`**

The offset of the top left corner from the anchor.

**`Param`**

The offset of the top right corner from the anchor.

**`Param`**

The offset of the bottom left corner from the anchor.

**`Param`**

The offset of the bottom right corner from the anchor.

**`Param`**

The texture coordinates.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bl` | `Point` |
| `br` | `Point` |
| `glyphOffset` | [`number`, `number`] |
| `isSDF` | `boolean` |
| `minFontScaleX` | `number` |
| `minFontScaleY` | `number` |
| `pixelOffsetBR` | `Point` |
| `pixelOffsetTL` | `Point` |
| `sectionIndex` | `number` |
| `tex` | \{ `h`: `number` ; `w`: `number` ; `x`: `number` ; `y`: `number`  } |
| `tex.h` | `number` |
| `tex.w` | `number` |
| `tex.x` | `number` |
| `tex.y` | `number` |
| `tl` | `Point` |
| `tr` | `Point` |
| `writingMode` | `any` \| `void` |

#### Defined in

src/symbol/quads.ts:26
