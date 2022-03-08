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

#### Defined in

[state/subscription.ts:19](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L19)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/subscription.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L12)

___

### isActive

• **isActive**: `boolean`

#### Defined in

[state/subscription.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L15)

___

### isCancelled

• **isCancelled**: `boolean`

#### Defined in

[state/subscription.ts:16](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L16)

___

### lastPaymentTimestamp

• **lastPaymentTimestamp**: `number`

#### Defined in

[state/subscription.ts:17](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L17)

___

### nextPaymentTimestamp

• **nextPaymentTimestamp**: `number`

#### Defined in

[state/subscription.ts:18](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L18)

___

### subscriber

• **subscriber**: `PublicKey`

#### Defined in

[state/subscription.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L13)

___

### subscriptionPlan

• **subscriptionPlan**: `PublicKey`

#### Defined in

[state/subscription.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L14)

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

#### Defined in

[state/subscription.ts:67](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L67)

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

#### Defined in

[state/subscription.ts:33](https://github.com/subrina-protocol/subrina-sdk/blob/34b4542/src/state/subscription.ts#L33)
