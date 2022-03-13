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

• **authority**: `string`

___

### isRegistered

• **isRegistered**: `boolean`

___

### nodePaymentAccount

• **nodePaymentAccount**: `string`

___

### nodePaymentWallet

• **nodePaymentWallet**: `string`

## Methods

### address

▸ `Static` **address**(`authority`): `string`

Helper function to generate node PDA Address

**`example`**
```typescript
const provider: Provider = getProvider();
const nodeAddress: string = ElfoNode.address(provider.wallet.publicKey.toBase58());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authority` | `string` | Public Key of node authority in base58 format |

#### Returns

`string`

PDA of the node in base58 format

___

### from

▸ `Static` **from**(`nodePublicKey`, `provider`): `Promise`<[`ElfoNode`](ElfoNode.md)\>

Fetches a node instance from a public key

**`example`**
```typescript
const provider: Provider = getProvider();
const nodeAddress: string = ElfoNode.address(provider.wallet.publicKey.toBase58());
const node: ElfoNode = ElfoNode.from(nodeAddress, provider);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodePublicKey` | `string` | Public key of the node |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`ElfoNode`](ElfoNode.md)\>
