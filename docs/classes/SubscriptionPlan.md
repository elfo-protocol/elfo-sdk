[@subrina-protocol/sdk](../README.md) / [Exports](../modules.md) / SubscriptionPlan

# Class: SubscriptionPlan

Represents a subscription plan

## Table of contents

### Properties

- [amount](SubscriptionPlan.md#amount)
- [feePercentage](SubscriptionPlan.md#feepercentage)
- [frequency](SubscriptionPlan.md#frequency)
- [hasAlreadyBeenInitialized](SubscriptionPlan.md#hasalreadybeeninitialized)
- [isActive](SubscriptionPlan.md#isactive)
- [planName](SubscriptionPlan.md#planname)
- [subscriptionAccounts](SubscriptionPlan.md#subscriptionaccounts)
- [subscriptionPlanAuthor](SubscriptionPlan.md#subscriptionplanauthor)
- [subscriptionPlanPaymentAccount](SubscriptionPlan.md#subscriptionplanpaymentaccount)

### Methods

- [from](SubscriptionPlan.md#from)

## Properties

### amount

• **amount**: `BN`

#### Defined in

[state/subscriptionPlan.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L13)

___

### feePercentage

• **feePercentage**: `number`

#### Defined in

[state/subscriptionPlan.ts:16](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L16)

___

### frequency

• **frequency**: `BN`

#### Defined in

[state/subscriptionPlan.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L14)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/subscriptionPlan.ts:9](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L9)

___

### isActive

• **isActive**: `boolean`

#### Defined in

[state/subscriptionPlan.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L15)

___

### planName

• **planName**: `string`

#### Defined in

[state/subscriptionPlan.ts:10](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L10)

___

### subscriptionAccounts

• **subscriptionAccounts**: `PublicKey`[]

#### Defined in

[state/subscriptionPlan.ts:17](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L17)

___

### subscriptionPlanAuthor

• **subscriptionPlanAuthor**: `PublicKey`

#### Defined in

[state/subscriptionPlan.ts:11](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L11)

___

### subscriptionPlanPaymentAccount

• **subscriptionPlanPaymentAccount**: `PublicKey`

#### Defined in

[state/subscriptionPlan.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L12)

## Methods

### from

▸ `Static` **from**(`subscriptionPlanPublicKey`, `provider`): `Promise`<[`SubscriptionPlan`](SubscriptionPlan.md)\>

Fetches a subscription plan instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionPlanPublicKey` | `PublicKey` | Public key of the subscription |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`SubscriptionPlan`](SubscriptionPlan.md)\>

#### Defined in

[state/subscriptionPlan.ts:31](https://github.com/subrina-protocol/subrina-sdk/blob/74b9272/src/state/subscriptionPlan.ts#L31)
