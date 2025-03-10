# Class: Hash

Adds the map's position to its page's location hash.
Passed as an option to the map object.

## Methods

### addTo

▸ **addTo**(`map`): [`Hash`](Hash.md)

Map element to listen for coordinate changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](Map.md) | The map object |

#### Returns

[`Hash`](Hash.md)

`this`

#### Defined in

src/ui/hash.ts:25

___

### remove

▸ **remove**(): [`Hash`](Hash.md)

Removes hash

#### Returns

[`Hash`](Hash.md)

`this`

#### Defined in

src/ui/hash.ts:37

## Properties

### \_updateHash

• **\_updateHash**: () => `Timeout`

Mobile Safari doesn't allow updating the hash more than 100 times per 30 seconds.

#### Type declaration

▸ (): `Timeout`

##### Returns

`Timeout`

#### Defined in

src/ui/hash.ts:136
