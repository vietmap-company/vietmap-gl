# Class: ScaleControl

A `ScaleControl` control displays the ratio of a distance on the map to the corresponding distance on the ground.

**`Example`**

```ts
let scale = new ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});
map.addControl(scale);

scale.setUnit('metric');
```

## Implements

- [`IControl`](../interfaces/IControl.md)

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

src/ui/control/scale_control.ts:67

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

src/ui/control/scale_control.ts:78

___

### setUnit

▸ **setUnit**(`unit`): `void`

Set the scale's unit of the distance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unit` | [`Unit`](../types/Unit.md) | Unit of the distance (`'imperial'`, `'metric'` or `'nautical'`). |

#### Returns

`void`

#### Defined in

src/ui/control/scale_control.ts:89
