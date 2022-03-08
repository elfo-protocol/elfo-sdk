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

___

### isRegistered

• **isRegistered**: `boolean`

___

### nodePaymentAccount

• **nodePaymentAccount**: `PublicKey`

___

### nodePaymentWallet

• **nodePaymentWallet**: `PublicKey`

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
