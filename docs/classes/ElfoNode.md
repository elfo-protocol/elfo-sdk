[@elfo/sdk](../README.md) / [Exports](../modules.md) / ElfoNode

# Class: ElfoNode

Represents a elfo node account

## Table of contents

### Properties

- [authority](ElfoNode.md#authority)
- [isRegistered](ElfoNode.md#isregistered)
- [nodePaymentAccount](ElfoNode.md#nodepaymentaccount)
- [nodePaymentWallet](ElfoNode.md#nodepaymentwallet)

### Methods

- [address](ElfoNode.md#address)
- [from](ElfoNode.md#from)

## Properties

### authority

• **authority**: `PublicKey`

#### Defined in

[state/node.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/node.ts#L13)

___

### isRegistered

• **isRegistered**: `boolean`

#### Defined in

[state/node.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/node.ts#L12)

___

### nodePaymentAccount

• **nodePaymentAccount**: `PublicKey`

#### Defined in

[state/node.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/node.ts#L15)

___

### nodePaymentWallet

• **nodePaymentWallet**: `PublicKey`

#### Defined in

[state/node.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/node.ts#L14)

## Methods

### address

▸ `Static` **address**(`authority`): `Promise`<`PublicKey`\>

Helper function to generate node PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authority` | `PublicKey` | Public Key of node authority |

#### Returns

`Promise`<`PublicKey`\>

PDA of the node

#### Defined in

[state/node.ts:48](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/node.ts#L48)

___

### from

▸ `Static` **from**(`nodePublicKey`, `provider`): `Promise`<[`ElfoNode`](ElfoNode.md)\>

Fetches a node instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodePublicKey` | `PublicKey` | Public key of the node |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`ElfoNode`](ElfoNode.md)\>

#### Defined in

[state/node.ts:29](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/node.ts#L29)
