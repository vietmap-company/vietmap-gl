# Type alias: PossiblyEvaluatedValue\<T\>

Ƭ **PossiblyEvaluatedValue**\<`T`\>: \{ `kind`: ``"constant"`` ; `value`: `T`  } \| `SourceExpression` \| `CompositeExpression`

"Possibly evaluated value" is an intermediate stage in the evaluation chain for both paint and layout property
values. The purpose of this stage is to optimize away unnecessary recalculations for data-driven properties. Code
which uses data-driven property values must assume that the value is dependent on feature data, and request that it
be evaluated for each feature. But when that property value is in fact a constant or camera function, the calculation
will not actually depend on the feature, and we can benefit from returning the prior result of having done the
evaluation once, ahead of time, in an intermediate step whose inputs are just the value and "global" parameters
such as current zoom level.

`PossiblyEvaluatedValue` represents the three possible outcomes of this step: if the input value was a constant or
camera expression, then the "possibly evaluated" result is a constant value. Otherwise, the input value was either
a source or composite expression, and we must defer final evaluation until supplied a feature. We separate
the source and composite cases because they are handled differently when generating GL attributes, buffers, and
uniforms.

Note that `PossiblyEvaluatedValue` (and `PossiblyEvaluatedPropertyValue`, below) are _not_ used for properties that
do not allow data-driven values. For such properties, we know that the "possibly evaluated" result is always a constant
scalar value. See below.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

src/style/properties.ts:377
