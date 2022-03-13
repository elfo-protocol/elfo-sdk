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

___

### feePercentage

• **feePercentage**: `number`

___

### frequency

• **frequency**: `BN`

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

___

### isActive

• **isActive**: `boolean`

___

### planName

• **planName**: `string`

___

### subscriptionAccounts

• **subscriptionAccounts**: `string`[]

___

### subscriptionPlanAuthor

• **subscriptionPlanAuthor**: `string`

___

### subscriptionPlanPaymentAccount

• **subscriptionPlanPaymentAccount**: `string`

## Methods

### address

▸ `Static` **address**(`planName`, `planAuthor`): `string`

Helper function to generate subscription plan PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planName` | `string` | subscription plan name |
| `planAuthor` | `string` | subscription plan author account address |

#### Returns

`string`

PDA of the subscription plan account

___

### from

▸ `Static` **from**(`subscriptionPlanPublicKey`, `provider`): `Promise`<[`SubscriptionPlan`](SubscriptionPlan.md)\>

Fetches a subscription plan instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionPlanPublicKey` | `string` | Public key of the subscription |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`SubscriptionPlan`](SubscriptionPlan.md)\>
