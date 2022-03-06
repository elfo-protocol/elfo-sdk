[@subrina-protocol/sdk](../README.md) / [Exports](../modules.md) / Subscription

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

- [from](Subscription.md#from)

## Properties

### cancellationReason

• **cancellationReason**: `number`

#### Defined in

[state/subscription.ts:16](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L16)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/subscription.ts:9](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L9)

___

### isActive

• **isActive**: `boolean`

#### Defined in

[state/subscription.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L12)

___

### isCancelled

• **isCancelled**: `boolean`

#### Defined in

[state/subscription.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L13)

___

### lastPaymentTimestamp

• **lastPaymentTimestamp**: `number`

#### Defined in

[state/subscription.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L14)

___

### nextPaymentTimestamp

• **nextPaymentTimestamp**: `number`

#### Defined in

[state/subscription.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L15)

___

### subscriber

• **subscriber**: `PublicKey`

#### Defined in

[state/subscription.ts:10](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L10)

___

### subscriptionPlan

• **subscriptionPlan**: `PublicKey`

#### Defined in

[state/subscription.ts:11](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L11)

## Methods

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

#### Defined in

[state/subscription.ts:30](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscription.ts#L30)
