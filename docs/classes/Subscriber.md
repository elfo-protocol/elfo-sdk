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

- [from](Subscriber.md#from)

## Properties

### authority

• **authority**: `PublicKey`

#### Defined in

[state/subscriber.ts:10](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/subscriber.ts#L10)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/subscriber.ts:9](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/subscriber.ts#L9)

___

### subscriberPaymentAccount

• **subscriberPaymentAccount**: `PublicKey`

#### Defined in

[state/subscriber.ts:11](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/subscriber.ts#L11)

___

### subscriptionAccounts

• **subscriptionAccounts**: `PublicKey`[]

#### Defined in

[state/subscriber.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/subscriber.ts#L12)

## Methods

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

[state/subscriber.ts:26](https://github.com/subrina-protocol/subrina-sdk/blob/9a4120e/src/state/subscriber.ts#L26)
