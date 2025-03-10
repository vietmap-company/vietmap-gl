# Class: AJAXError

An error thrown when a HTTP request results in an error response.

## Hierarchy

- `Error`

  ↳ **`AJAXError`**

## Constructors

### constructor

• **new AJAXError**(`status`, `statusText`, `url`, `body`): [`AJAXError`](AJAXError.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | `number` | The response's HTTP status code. |
| `statusText` | `string` | The response's HTTP status text. |
| `url` | `string` | The request's URL. |
| `body` | `Blob` | The response's body. |

#### Returns

[`AJAXError`](AJAXError.md)

#### Overrides

Error.constructor

#### Defined in

src/util/ajax.ts:114

## Properties

### body

• **body**: `Blob`

The response's body.

#### Defined in

src/util/ajax.ts:106

___

### status

• **status**: `number`

The response's HTTP status code.

#### Defined in

src/util/ajax.ts:91

___

### statusText

• **statusText**: `string`

The response's HTTP status text.

#### Defined in

src/util/ajax.ts:96

___

### url

• **url**: `string`

The request's URL.

#### Defined in

src/util/ajax.ts:101
