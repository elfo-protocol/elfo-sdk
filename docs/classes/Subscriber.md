[@elfo/sdk](../README.md) / [Exports](../modules.md) / Subscriber

# Class: Subscriber

Represents a subscriber account

## Table of contents

### Properties

- [authority](Subscriber.md#authority)
- [hasAlreadyBeenInitialized](Subscriber.md#hasalreadybeeninitialized)
- [subscriberPaymentAccount](Subscriber.md#subscriberpaymentaccount)
- [subscriptionAccounts](Subscriber.md#subscriptionaccounts)

### Methods

- [address](Subscriber.md#address)
- [from](Subscriber.md#from)

## Properties

### authority

• **authority**: `PublicKey`

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

___

### subscriberPaymentAccount

• **subscriberPaymentAccount**: `PublicKey`

___

### subscriptionAccounts

• **subscriptionAccounts**: `PublicKey`[]

## Methods

### address

▸ `Static` **address**(`authority`): `Promise`<`PublicKey`\>

Helper function to generate subscriber PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authority` | `PublicKey` | Public Key of subscriber authority |

#### Returns

`Promise`<`PublicKey`\>

PDA of the subscriber account

___

### from

▸ `Static` **from**(`subscriberPublicKey`, `provider`): `Promise`<[`Subscriber`](Subscriber.md)\>

Fetches a subscriber instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriberPublicKey` | `PublicKey` | Public key of the subscription |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`Subscriber`](Subscriber.md)\>
