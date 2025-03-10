# Type alias: StyleOptions

Ƭ **StyleOptions**: `Object`

The options object related to the [Map](../classes/Map.md)'s style related methods

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `localIdeographFontFamily?` | `string` \| ``false`` | Defines a CSS font-family for locally overriding generation of glyphs in the 'CJK Unified Ideographs', 'Hiragana', 'Katakana' and 'Hangul Syllables' ranges. In these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold). Set to `false`, to enable font settings from the map's style for these glyph ranges. Forces a full update. |
| `validate?` | `boolean` | If false, style validation will be skipped. Useful in production environment. |

#### Defined in

src/style/style.ts:85
