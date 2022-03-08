[@elfo/sdk](README.md) / Exports

# @elfo/sdk

## Table of contents

### Classes

- [ElfoNode](classes/ElfoNode.md)
- [ProtocolState](classes/ProtocolState.md)
- [Subscriber](classes/Subscriber.md)
- [Subscription](classes/Subscription.md)
- [SubscriptionPlan](classes/SubscriptionPlan.md)
- [SubscriptionPlanAuthor](classes/SubscriptionPlanAuthor.md)

### Variables

- [ELFO\_PROTOCOL\_PROGRAM\_ID](modules.md#elfo_protocol_program_id)
- [ELFO\_PROTOCOL\_SIGNER](modules.md#elfo_protocol_signer)
- [ELFO\_PROTOCOL\_STATE](modules.md#elfo_protocol_state)

### Functions

- [createSubscription](modules.md#createsubscription)
- [registerNode](modules.md#registernode)
- [subscribe](modules.md#subscribe)
- [triggerPayment](modules.md#triggerpayment)
- [unsubscribe](modules.md#unsubscribe)

## Variables

### ELFO\_PROTOCOL\_PROGRAM\_ID

• `Const` **ELFO\_PROTOCOL\_PROGRAM\_ID**: `PublicKey`

Program ID of ELFO protocol core program

___

### ELFO\_PROTOCOL\_SIGNER

• `Const` **ELFO\_PROTOCOL\_SIGNER**: `PublicKey`

 ELFO Protocol signer account

___

### ELFO\_PROTOCOL\_STATE

• `Const` **ELFO\_PROTOCOL\_STATE**: `PublicKey`

 Elfo protocol state account

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

___

### subscribe

▸ **subscribe**(`provider`, `subscriptionPlan`, `numberOfCycles?`): `Promise`<`PublicKey`\>

Subscribe to a subscription plan

**`example`**
```typescript
const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
const subscription: PublicKey = await subscribe(provider, subscriptionPlan);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscriptionPlan` | `PublicKey` | Subscription plan to subscribe |
| `numberOfCycles?` | `number` | number of cycle to delegate funds |

#### Returns

`Promise`<`PublicKey`\>

Subscription public key

___

### triggerPayment

▸ **triggerPayment**(`provider`, `subscription`): `Promise`<`void`\>

Tries to trigger payment of a subscription.

**`example`**
```typescript
const subscription: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
await triggerPayment(provider, subscription);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscription` | `PublicKey` | Subscription to try trigger payment |

#### Returns

`Promise`<`void`\>

___

### unsubscribe

▸ **unsubscribe**(`provider`, `subscriptionPlan`): `Promise`<`void`\>

Unsubscribe from a subscription plan

**`example`**
```typescript
const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
await unsubscribe(provider, subscriptionPlan);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscriptionPlan` | `PublicKey` | Subscription plan to unsubscribe from |

#### Returns

`Promise`<`void`\>
