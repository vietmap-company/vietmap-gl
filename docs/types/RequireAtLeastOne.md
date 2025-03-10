# Type alias: RequireAtLeastOne\<T\>

Ƭ **RequireAtLeastOne**\<`T`\>: \{ [K in keyof T]-?: Required\<Pick\<T, K\>\> & Partial\<Pick\<T, Exclude\<keyof T, K\>\>\> }[keyof `T`]

A helper to allow require of at least one propery

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

src/ui/camera.ts:32
