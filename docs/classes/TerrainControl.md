# Class: TerrainControl

A `TerrainControl` control contains a button for turning the terrain on and off.

**`Example`**

```ts
let map = new Map({TerrainControl: false})
    .addControl(new TerrainControl({
        source: "terrain"
    }));
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

src/ui/control/terrain_control.ts:31

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

src/ui/control/terrain_control.ts:45
