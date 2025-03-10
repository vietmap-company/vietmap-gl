# Type alias: DistributiveOmit\<T, K\>

Ƭ **DistributiveOmit**\<`T`, `K`\>: `T` extends `unknown` ? `Omit`\<`T`, `K`\> : `never`

A helper for type to omit a property from a type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`DistributiveKeys`](DistributiveKeys.md)\<`T`\> |

#### Defined in

src/util/vectortile_to_geojson.ts:11
