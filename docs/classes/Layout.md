# Class: Layout\<Props\>

Because layout properties are not transitionable, they have a simpler representation and evaluation chain than
paint properties: `PropertyValue`s are possibly evaluated, producing possibly evaluated values, which are then
fully evaluated.

`Layout` stores a map of all (property name, `PropertyValue`) pairs for layout properties of a
given layer type. It can calculate the possibly-evaluated values for all of them at once, producing a
`PossiblyEvaluated` instance for the same set of properties.

## Type parameters

| Name |
| :------ |
| `Props` |
