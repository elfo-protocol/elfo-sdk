[@subrina-protocol/sdk](../README.md) / [Exports](../modules.md) / SubrinaNode

# Class: SubrinaNode

Represents a subrina node account

## Table of contents

### Properties

- [authority](SubrinaNode.md#authority)
- [isRegistered](SubrinaNode.md#isregistered)
- [nodePaymentAccount](SubrinaNode.md#nodepaymentaccount)
- [nodePaymentWallet](SubrinaNode.md#nodepaymentwallet)

### Methods

- [from](SubrinaNode.md#from)

## Properties

### authority

• **authority**: `PublicKey`

#### Defined in

state/node.ts:10

___

### isRegistered

• **isRegistered**: `boolean`

#### Defined in

state/node.ts:9

___

### nodePaymentAccount

• **nodePaymentAccount**: `PublicKey`

#### Defined in

state/node.ts:12

___

### nodePaymentWallet

• **nodePaymentWallet**: `PublicKey`

#### Defined in

state/node.ts:11

## Methods

### from

▸ `Static` **from**(`nodePublicKey`, `provider`): `Promise`<[`SubrinaNode`](SubrinaNode.md)\>

Fetches a node instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodePublicKey` | `PublicKey` | Public key of the node |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`SubrinaNode`](SubrinaNode.md)\>

#### Defined in

state/node.ts:26
