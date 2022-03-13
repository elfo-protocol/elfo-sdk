[@elfo/sdk](../README.md) / [Exports](../modules.md) / SubscriptionPlanAuthor

# Class: SubscriptionPlanAuthor

Represents a subscription plan author account

## Table of contents

### Properties

- [authority](SubscriptionPlanAuthor.md#authority)
- [hasAlreadyBeenInitialized](SubscriptionPlanAuthor.md#hasalreadybeeninitialized)
- [publicKey](SubscriptionPlanAuthor.md#publickey)
- [subscriptionPlanAccounts](SubscriptionPlanAuthor.md#subscriptionplanaccounts)

### Methods

- [address](SubscriptionPlanAuthor.md#address)
- [from](SubscriptionPlanAuthor.md#from)

## Properties

### authority

• **authority**: `string`

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

___

### publicKey

• **publicKey**: `string`

___

### subscriptionPlanAccounts

• **subscriptionPlanAccounts**: `string`[]

## Methods

### address

▸ `Static` **address**(`authority`): `string`

Helper function to generate subscription author PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authority` | `string` | Creator of the subscription plan |

#### Returns

`string`

PDA of the subscription author account

___

### from

▸ `Static` **from**(`subscriptionPlanAuthorPublicKey`, `provider`): `Promise`<[`SubscriptionPlanAuthor`](SubscriptionPlanAuthor.md)\>

Fetches a subscription plan author instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionPlanAuthorPublicKey` | `string` | Public key of the subscription plan author |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`SubscriptionPlanAuthor`](SubscriptionPlanAuthor.md)\>
