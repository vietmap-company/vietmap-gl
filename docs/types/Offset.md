# Type alias: Offset

Ƭ **Offset**: `number` \| [`PointLike`](PointLike.md) \| \{ [\_ in PositionAnchor]: PointLike }

A pixel offset specified as:

- a single number specifying a distance from the location
- a [PointLike](PointLike.md) specifying a constant offset
- an object of Points specifying an offset for each anchor position

Negative offsets indicate left and up.

#### Defined in

src/ui/popup.ts:33
