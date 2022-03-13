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
- [publicKey](Subscription.md#publickey)
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

### publicKey

• **publicKey**: `string`

___

### subscriber

• **subscriber**: `string`

___

### subscriptionPlan

• **subscriptionPlan**: `string`

## Methods

### address

▸ `Static` **address**(`subscriber`, `subscriptionPlan`): `string`

Helper function to generate subscription PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriber` | `string` | Public Key of subscriber state account |
| `subscriptionPlan` | `string` | Public Key of the subscription plan |

#### Returns

`string`

PDA of the subscription account

___

### from

▸ `Static` **from**(`subscriptionPublicKey`, `provider`): `Promise`<[`Subscription`](Subscription.md)\>

Fetches a subscription instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionPublicKey` | `string` | Public key of the subscription |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`Subscription`](Subscription.md)\>
