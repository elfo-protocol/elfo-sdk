[@subrina-protocol/sdk](README.md) / Exports

# @subrina-protocol/sdk

## Table of contents

### Classes

- [ProtocolState](classes/ProtocolState.md)
- [SubrinaNode](classes/SubrinaNode.md)
- [Subscriber](classes/Subscriber.md)
- [Subscription](classes/Subscription.md)
- [SubscriptionPlan](classes/SubscriptionPlan.md)
- [SubscriptionPlanAuthor](classes/SubscriptionPlanAuthor.md)

### Functions

- [createSubscription](modules.md#createsubscription)
- [initializeSubscriber](modules.md#initializesubscriber)
- [registerNode](modules.md#registernode)
- [subscribe](modules.md#subscribe)
- [triggerPayment](modules.md#triggerpayment)
- [unsubscribe](modules.md#unsubscribe)

## Functions

### createSubscription

▸ **createSubscription**(`provider`, `name`, `amount`, `frequency`, `feePercentage`): `Promise`<[`PublicKey`, `PublicKey`]\>

Creates a subscription plan

**`example`**
```typescript
const name = "SEO course"
const amount = 20 // 20 USD
const frequency = 60 * 60 * 24 * 30 // 1 month
const feePercentage = 2;
const [plan, author] = await createSubscription(provider, name, frequency, feePercentage);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `name` | `string` | Subscription plan name |
| `amount` | `number` | Subscription amount without decimals |
| `frequency` | `number` | Subscription frequency in seconds |
| `feePercentage` | `number` | Fee percentage for plan (minimum 1, maximum 5) |

#### Returns

`Promise`<[`PublicKey`, `PublicKey`]\>

Public key tuple [subscriptionPlan, subscriptionPlanAuthor] of plan and plan author

#### Defined in

[actions/createSubscription.ts:28](https://github.com/subrina-protocol/subrina-sdk/blob/9b2be85/src/actions/createSubscription.ts#L28)

___

### initializeSubscriber

▸ **initializeSubscriber**(`provider`): `Promise`<`PublicKey`\>

Initialize a subscriber

**`example`**
```typescript
const subscriber: PublicKey = await initializeSubscriber(provider);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<`PublicKey`\>

Subscriber public key

#### Defined in

[actions/initializeSubscriber.ts:20](https://github.com/subrina-protocol/subrina-sdk/blob/9b2be85/src/actions/initializeSubscriber.ts#L20)

___

### registerNode

▸ **registerNode**(`provider`, `nodePaymentWallet`): `Promise`<`PublicKey`\>

Registers a node that monitor subscriptions

**`example`**
```typescript
const nodePaymentWallet = new PublicKey("8RsVYhJqtS96mnEfaSY2fKBQRdWDg6KZ6BWZrR1biS8i");
const nodeAddress: PublicKey = await registerNode(provider, nodePaymentWallet);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `nodePaymentWallet` | `PublicKey` | Payment wallet of node |

#### Returns

`Promise`<`PublicKey`\>

Node public key

#### Defined in

[actions/registerNode.ts:22](https://github.com/subrina-protocol/subrina-sdk/blob/9b2be85/src/actions/registerNode.ts#L22)

___

### subscribe

▸ **subscribe**(`provider`, `subscriptionPlan`, `numberOfCycles?`): `Promise`<`PublicKey`\>

Subscribe to a subscription plan

**`parma`** subscriptionPlan Subscription plan to subscribe

**`example`**
```typescript
const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
const subscription: PublicKey = await subscribe(provider, subscriptionPlan);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscriptionPlan` | `PublicKey` | - |
| `numberOfCycles?` | `number` | number of cycle to delegate funds |

#### Returns

`Promise`<`PublicKey`\>

Subscription public key

#### Defined in

[actions/subscribe.ts:24](https://github.com/subrina-protocol/subrina-sdk/blob/9b2be85/src/actions/subscribe.ts#L24)

___

### triggerPayment

▸ **triggerPayment**(`provider`, `subscription`): `Promise`<`void`\>

Tries to trigger payment of a subscription.

**`parma`** subscription Subscription to try trigger payment

**`example`**
```typescript
const subscription: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
await triggerPayment(provider, subscription);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscription` | `PublicKey` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[actions/triggerPayment.ts:23](https://github.com/subrina-protocol/subrina-sdk/blob/9b2be85/src/actions/triggerPayment.ts#L23)

___

### unsubscribe

▸ **unsubscribe**(`provider`, `subscriptionPlan`): `Promise`<`void`\>

Unsubscribe from a subscription plan

**`parma`** subscriptionPlan Subscription plan to unsubscribe from

**`example`**
```typescript
const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
await unsubscribe(provider, subscriptionPlan);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscriptionPlan` | `PublicKey` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[actions/unsubscribe.ts:19](https://github.com/subrina-protocol/subrina-sdk/blob/9b2be85/src/actions/unsubscribe.ts#L19)
