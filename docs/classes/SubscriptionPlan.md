[@elfo/sdk](../README.md) / [Exports](../modules.md) / SubscriptionPlan

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

- [address](SubscriptionPlan.md#address)
- [from](SubscriptionPlan.md#from)

## Properties

### amount

• **amount**: `BN`

#### Defined in

[state/subscriptionPlan.ts:16](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L16)

___

### feePercentage

• **feePercentage**: `number`

#### Defined in

[state/subscriptionPlan.ts:19](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L19)

___

### frequency

• **frequency**: `BN`

#### Defined in

[state/subscriptionPlan.ts:17](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L17)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/subscriptionPlan.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L12)

___

### isActive

• **isActive**: `boolean`

#### Defined in

[state/subscriptionPlan.ts:18](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L18)

___

### planName

• **planName**: `string`

#### Defined in

[state/subscriptionPlan.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L13)

___

### subscriptionAccounts

• **subscriptionAccounts**: `PublicKey`[]

#### Defined in

[state/subscriptionPlan.ts:20](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L20)

___

### subscriptionPlanAuthor

• **subscriptionPlanAuthor**: `PublicKey`

#### Defined in

[state/subscriptionPlan.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L14)

___

### subscriptionPlanPaymentAccount

• **subscriptionPlanPaymentAccount**: `PublicKey`

#### Defined in

[state/subscriptionPlan.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L15)

## Methods

### address

▸ `Static` **address**(`planName`, `planAuthor`): `Promise`<`PublicKey`\>

Helper function to generate subscription plan PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planName` | `string` | subscription plan name |
| `planAuthor` | `PublicKey` | subscription plan author account address |

#### Returns

`Promise`<`PublicKey`\>

PDA of the subscription plan account

#### Defined in

[state/subscriptionPlan.ts:70](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L70)

___

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

[state/subscriptionPlan.ts:34](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlan.ts#L34)
