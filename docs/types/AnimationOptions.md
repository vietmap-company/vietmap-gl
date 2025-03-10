# Type alias: AnimationOptions

Ƭ **AnimationOptions**: `Object`

Options common to map movement methods that involve animation, such as [Map#panBy](../classes/Map.md#panby) and
[Map#easeTo](../classes/Map.md#easeto), controlling the duration and easing function of the animation. All properties
are optional.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `animate?` | `boolean` | If `false`, no animation will occur. |
| `duration?` | `number` | The animation's duration, measured in milliseconds. |
| `easing?` | (`_`: `number`) => `number` | - |
| `essential?` | `boolean` | If `true`, then the animation is considered essential and will not be affected by [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). |
| `freezeElevation?` | `boolean` | Default false. Needed in 3D maps to let the camera stay in a constant height based on sea-level. After the animation finished the zoom-level will be recalculated in respect of the distance from the camera to the center-coordinate-altitude. |
| `offset?` | [`PointLike`](PointLike.md) | of the target center relative to real map container center at the end of animation. |

#### Defined in

src/ui/camera.ts:194
