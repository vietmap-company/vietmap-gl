# Class: KeyboardHandler

The `KeyboardHandler` allows the user to zoom, rotate, and pan the map using
the following keyboard shortcuts:

- `=` / `+`: Increase the zoom level by 1.
- `Shift-=` / `Shift-+`: Increase the zoom level by 2.
- `-`: Decrease the zoom level by 1.
- `Shift--`: Decrease the zoom level by 2.
- Arrow keys: Pan by 100 pixels.
- `Shift+⇢`: Increase the rotation by 15 degrees.
- `Shift+⇠`: Decrease the rotation by 15 degrees.
- `Shift+⇡`: Increase the pitch by 10 degrees.
- `Shift+⇣`: Decrease the pitch by 10 degrees.

## Implements

- [`Handler`](../interfaces/Handler.md)

## Methods

### disable

▸ **disable**(): `void`

Disables the "keyboard rotate and zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.keyboard.disable();
```

#### Implementation of

Handler.disable

#### Defined in

src/ui/handler/keyboard.ts:156

___

### disableRotation

▸ **disableRotation**(): `void`

Disables the "keyboard pan/rotate" interaction, leaving the
"keyboard zoom" interaction enabled.

#### Returns

`void`

**`Example`**

```ts
map.keyboard.disableRotation();
```

#### Defined in

src/ui/handler/keyboard.ts:192

___

### enable

▸ **enable**(): `void`

Enables the "keyboard rotate and zoom" interaction.

#### Returns

`void`

**`Example`**

```ts
map.keyboard.enable();
```

#### Implementation of

Handler.enable

#### Defined in

src/ui/handler/keyboard.ts:144

___

### enableRotation

▸ **enableRotation**(): `void`

Enables the "keyboard pan/rotate" interaction.

#### Returns

`void`

**`Example`**

```ts
map.keyboard.enable();
map.keyboard.enableRotation();
```

#### Defined in

src/ui/handler/keyboard.ts:205

___

### isActive

▸ **isActive**(): `boolean`

Returns true if the handler is enabled and has detected the start of a
zoom/rotate gesture.

#### Returns

`boolean`

`true` if the handler is enabled and has detected the
start of a zoom/rotate gesture.

#### Implementation of

[Handler](../interfaces/Handler.md).[isActive](../interfaces/Handler.md#isactive)

#### Defined in

src/ui/handler/keyboard.ts:179

___

### isEnabled

▸ **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "keyboard rotate and zoom"
interaction is enabled.

#### Returns

`boolean`

`true` if the "keyboard rotate and zoom"
interaction is enabled.

#### Implementation of

Handler.isEnabled

#### Defined in

src/ui/handler/keyboard.ts:168
