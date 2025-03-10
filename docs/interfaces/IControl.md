# Interface: IControl

Interface for interactive controls added to the map. This is a
specification for implementers to model: it is not
an exported method or class.

Controls must implement `onAdd` and `onRemove`, and must own an
element, which is often a `div` element. To use VietMap GL JS's
default control styling, add the `vietmapgl-ctrl` class to your control's
node.

**`Example`**

Control implemented as ES6 class
```ts
class HelloWorldControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'vietmapgl-ctrl';
        this._container.textContent = 'Hello, world';
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

// Control implemented as ES5 prototypical class
function HelloWorldControl() { }

HelloWorldControl.prototype.onAdd = function(map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'vietmapgl-ctrl';
    this._container.textContent = 'Hello, world';
    return this._container;
};

HelloWorldControl.prototype.onRemove = function () {
     this._container.parentNode.removeChild(this._container);
     this._map = undefined;
};
```

## Implemented by

- [`AttributionControl`](../classes/AttributionControl.md)
- [`FullscreenControl`](../classes/FullscreenControl.md)
- [`GeolocateControl`](../classes/GeolocateControl.md)
- [`LogoControl`](../classes/LogoControl.md)
- [`NavigationControl`](../classes/NavigationControl.md)
- [`ScaleControl`](../classes/ScaleControl.md)
- [`TerrainControl`](../classes/TerrainControl.md)

## Methods

### onAdd

▸ **onAdd**(`map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](../classes/Map.md#addcontrol)
internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](../classes/Map.md) | the Map this control will be added to |

#### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

#### Defined in

src/ui/control/control.ts:66

___

### onRemove

▸ **onRemove**(`map`): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](../classes/Map.md#removecontrol)
internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](../classes/Map.md) | the Map this control will be removed from |

#### Returns

`void`

#### Defined in

src/ui/control/control.ts:74

## Properties

### getDefaultPosition

• `Optional` `Readonly` **getDefaultPosition**: () => [`ControlPosition`](../types/ControlPosition.md)

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](../classes/Map.md#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

#### Type declaration

▸ (): [`ControlPosition`](../types/ControlPosition.md)

##### Returns

[`ControlPosition`](../types/ControlPosition.md)

#### Defined in

src/ui/control/control.ts:83
