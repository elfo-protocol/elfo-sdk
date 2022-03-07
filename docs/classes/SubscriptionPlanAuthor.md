[@elfo/sdk](../README.md) / [Exports](../modules.md) / SubscriptionPlanAuthor

# Class: SubscriptionPlanAuthor

Represents a subscription plan author account

## Table of contents

### Methods

- [address](SubscriptionPlanAuthor.md#address)
- [from](SubscriptionPlanAuthor.md#from)

## Methods

### address

▸ `Static` **address**(`authority`): `Promise`<`PublicKey`\>

Helper function to generate subscription author PDA Address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authority` | `PublicKey` | Creator of the subscription plan |

#### Returns

`Promise`<`PublicKey`\>

PDA of the subscription author account

#### Defined in

[state/subscriptionPlanAuthor.ts:46](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlanAuthor.ts#L46)

___

### from

▸ `Static` **from**(`subscriptionPlanAuthorPublicKey`, `provider`): `Promise`<[`SubscriptionPlanAuthor`](SubscriptionPlanAuthor.md)\>

Fetches a subscription plan author instance from a public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionPlanAuthorPublicKey` | `PublicKey` | Public key of the subscription plan author |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`SubscriptionPlanAuthor`](SubscriptionPlanAuthor.md)\>

#### Defined in

[state/subscriptionPlanAuthor.ts:24](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/subscriptionPlanAuthor.ts#L24)
