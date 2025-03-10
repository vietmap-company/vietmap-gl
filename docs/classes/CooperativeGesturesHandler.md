# Class: CooperativeGesturesHandler

A `CooperativeGestureHandler` is a control that adds cooperative gesture info when user tries to zoom in/out.

**`Example`**

```ts
const map = new Map({
  cooperativeGestures: true
});
```

**`See`**

[Example: cooperative gestures]

## Implements

- [`Handler`](../interfaces/Handler.md)

## Properties

### \_bypassKey

• **\_bypassKey**: ``"ctrlKey"`` \| ``"metaKey"``

This is the key that will allow to bypass the cooperative gesture protection

#### Defined in

src/ui/handler/cooperative_gestures.ts:31
