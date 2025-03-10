# Class: AttributionControl

An `AttributionControl` control presents the map's attribution information. By default, the attribution control is expanded (regardless of map width).

**`Example`**

```ts
let map = new Map({attributionControl: false})
    .addControl(new AttributionControl({
        compact: true
    }));
```

## Implements

- [`IControl`](../interfaces/IControl.md)

## Constructors

### constructor

• **new AttributionControl**(`options?`): [`AttributionControl`](AttributionControl.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [`AttributionControlOptions`](../types/AttributionControlOptions.md) | `defaultAtributionControlOptions` | the attribution options |

#### Returns

[`AttributionControl`](AttributionControl.md)

#### Defined in

src/ui/control/attribution_control.ts:54

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

src/ui/control/attribution_control.ts:63

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

src/ui/control/attribution_control.ts:85
