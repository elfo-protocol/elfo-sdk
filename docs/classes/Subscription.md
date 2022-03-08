[@elfo/sdk](../README.md) / [Exports](../modules.md) / Subscription

# Class: Subscription

Represents a subscription account

## Table of contents

### Properties

- [cancellationReason](Subscription.md#cancellationreason)
- [hasAlreadyBeenInitialized](Subscription.md#hasalreadybeeninitialized)
- [isActive](Subscription.md#isactive)
- [isCancelled](Subscription.md#iscancelled)
- [lastPaymentTimestamp](Subscription.md#lastpaymenttimestamp)
- [nextPaymentTimestamp](Subscription.md#nextpaymenttimestamp)
- [subscriber](Subscription.md#subscriber)
- [subscriptionPlan](Subscription.md#subscriptionplan)

### Methods

- [address](Subscription.md#address)
- [from](Subscription.md#from)

## Properties

### cancellationReason

• **cancellationReason**: `number`

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

___

### isActive

• **isActive**: `boolean`

___

### isCancelled

• **isCancelled**: `boolean`

___

### lastPaymentTimestamp

• **lastPaymentTimestamp**: `number`

___

### nextPaymentTimestamp

• **nextPaymentTimestamp**: `number`

___

### subscriber

• **subscriber**: `PublicKey`

___

### subscriptionPlan

• **subscriptionPlan**: `PublicKey`

## Methods

### address

▸ `Static` **address**(`subscriber`, `subscriptionPlan`): `Promise`<`PublicKey`\>

Helper function to generate subscription PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriber` | `PublicKey` | Public Key of subscriber state account |
| `subscriptionPlan` | `PublicKey` | Public Key of the subscription plan |

#### Returns

`Promise`<`PublicKey`\>

PDA of the subscription account

___

### from

▸ `Static` **from**(`subscriptionPublicKey`, `provider`): `Promise`<[`Subscription`](Subscription.md)\>

Fetches a subscription instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionPublicKey` | `PublicKey` | Public key of the subscription |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`Subscription`](Subscription.md)\>
