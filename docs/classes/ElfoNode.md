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

- [from](ElfoNode.md#from)

## Properties

### authority

• **authority**: `PublicKey`

#### Defined in

[state/node.ts:10](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/node.ts#L10)

___

### isRegistered

• **isRegistered**: `boolean`

#### Defined in

[state/node.ts:9](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/node.ts#L9)

___

### nodePaymentAccount

• **nodePaymentAccount**: `PublicKey`

#### Defined in

[state/node.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/node.ts#L12)

___

### nodePaymentWallet

• **nodePaymentWallet**: `PublicKey`

#### Defined in

[state/node.ts:11](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/node.ts#L11)

## Methods

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

[state/node.ts:26](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/node.ts#L26)
