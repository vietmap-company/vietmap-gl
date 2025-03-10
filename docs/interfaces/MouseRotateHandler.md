# Interface: MouseRotateHandler

`MouseRotateHandler` allows the user to rotate the map by clicking and dragging

## Hierarchy

- `DragMoveHandler`\<`DragRotateResult`, `MouseEvent`\>

  ↳ **`MouseRotateHandler`**

## Methods

### isActive

▸ **isActive**(): `boolean`

This is used to indicate if the handler is currently active or not.
In case a handler is active, it will block other handlers from gettting the relevant events.
There is an allow list of handlers that can be active at the same time, which is configured when adding a handler.

#### Returns

`boolean`

#### Inherited from

DragMoveHandler.isActive

#### Defined in

src/ui/handler_manager.ts:48

___

### reset

▸ **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

#### Returns

`void`

#### Inherited from

DragMoveHandler.reset

#### Defined in

src/ui/handler_manager.ts:52

## Properties

### renderFrame

• `Optional` `Readonly` **renderFrame**: () => `void` \| [`HandlerResult`](../types/HandlerResult.md)

`renderFrame` is the only non-dom event. It is called during render
frames and can be used to smooth camera changes (see scroll handler).

#### Type declaration

▸ (): `void` \| [`HandlerResult`](../types/HandlerResult.md)

##### Returns

`void` \| [`HandlerResult`](../types/HandlerResult.md)

#### Inherited from

DragMoveHandler.renderFrame

#### Defined in

src/ui/handler_manager.ts:74
