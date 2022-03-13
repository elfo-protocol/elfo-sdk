[@elfo/sdk](../README.md) / [Exports](../modules.md) / Subscriber

# Class: Subscriber

Represents a subscriber account

## Table of contents

### Properties

- [authority](Subscriber.md#authority)
- [hasAlreadyBeenInitialized](Subscriber.md#hasalreadybeeninitialized)
- [publicKey](Subscriber.md#publickey)
- [subscriberPaymentAccount](Subscriber.md#subscriberpaymentaccount)
- [subscriptionAccounts](Subscriber.md#subscriptionaccounts)

### Methods

- [address](Subscriber.md#address)
- [from](Subscriber.md#from)

## Properties

### authority

• **authority**: `string`

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

___

### publicKey

• **publicKey**: `string`

___

### subscriberPaymentAccount

• **subscriberPaymentAccount**: `string`

___

### subscriptionAccounts

• **subscriptionAccounts**: `string`[]

## Methods

### address

▸ `Static` **address**(`authority`): `string`

Helper function to generate subscriber PDA Address

**`example`**
```typescript
const provider: Provider = getProvider();
const nodeAddress: string = ElfoNode.address(provider.wallet.publicKey.toBase58());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authority` | `string` | Public Key of subscriber authority |

#### Returns

`string`

PDA of the subscriber account in base58 format

___

### from

▸ `Static` **from**(`subscriberPublicKey`, `provider`): `Promise`<[`Subscriber`](Subscriber.md)\>

Fetches a subscriber instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriberPublicKey` | `string` | Public key of the subscription in base58 format |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`Subscriber`](Subscriber.md)\>
