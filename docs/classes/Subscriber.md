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

#### Defined in

[state/subscriber.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/subscriber.ts#L13)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/subscriber.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/subscriber.ts#L12)

___

### subscriberPaymentAccount

• **subscriberPaymentAccount**: `PublicKey`

#### Defined in

[state/subscriber.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/subscriber.ts#L14)

___

### subscriptionAccounts

• **subscriptionAccounts**: `PublicKey`[]

#### Defined in

[state/subscriber.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/subscriber.ts#L15)

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

#### Defined in

[state/subscriber.ts:48](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/subscriber.ts#L48)

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

#### Defined in

[state/subscriber.ts:29](https://github.com/subrina-protocol/subrina-sdk/blob/21d16a2/src/state/subscriber.ts#L29)
