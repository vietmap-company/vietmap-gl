# Class: NavigationControl

A `NavigationControl` control contains zoom buttons and a compass.

**`Example`**

```ts
let nav = new NavigationControl();
map.addControl(nav, 'top-left');
```

**`See`**

[Display map navigation controls]

## Implements

- [`IControl`](../interfaces/IControl.md)

## Constructors

### constructor

• **new NavigationControl**(`options?`): [`NavigationControl`](NavigationControl.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`NavigationControlOptions`](../types/NavigationControlOptions.md) | the control's options |

#### Returns

[`NavigationControl`](NavigationControl.md)

#### Defined in

src/ui/control/navigation_control.ts:60

## Methods

### onAdd

▸ **onAdd**(`map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](Map.md#addcontrol)
internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](Map.md) | the Map this control will be added to |

#### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

#### Implementation of

[IControl](../interfaces/IControl.md).[onAdd](../interfaces/IControl.md#onadd)

#### Defined in

src/ui/control/navigation_control.ts:104

___

### onRemove

▸ **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](Map.md#removecontrol)
internally.

#### Returns

`void`

#### Implementation of

[IControl](../interfaces/IControl.md).[onRemove](../interfaces/IControl.md#onremove)

#### Defined in

src/ui/control/navigation_control.ts:125
