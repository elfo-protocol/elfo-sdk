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

▸ **createSubscription**(`provider`, `name`, `amount`, `frequency`, `feePercentage`): `Promise`<[`string`, `string`]\>

Creates a subscription plan

**`example`**
```typescript
const provider: Provider = getProvider();
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

`Promise`<[`string`, `string`]\>

Base58 public key tuple [subscriptionPlan, subscriptionPlanAuthor] of plan and plan author

___

### registerNode

▸ **registerNode**(`provider`, `nodePaymentWallet`): `Promise`<`string`\>

Registers a node that monitor subscriptions

**`example`**
```typescript
const provider: Provider = getProvider();
const nodePaymentWallet: PublicKey = getNodePaymentWallet();
const nodeAddress: string = await registerNode(provider, nodePaymentWallet.toBase58());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `nodePaymentWallet` | `string` | Payment wallet of node in base58 string format |

#### Returns

`Promise`<`string`\>

Node public key in base58 string format

___

### subscribe

▸ **subscribe**(`provider`, `subscriptionPlan`, `numberOfCycles?`): `Promise`<`string`\>

Subscribe to a subscription plan

**`example`**
```typescript
const provider: Provider = getProvider();
const subscriptionPlan: PublicKey = getSubscriptionPlanPublicKey();
const subscription: string = await subscribe(provider, subscriptionPlan.toBase58());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscriptionPlan` | `string` | Subscription plan public key in base58 string format |
| `numberOfCycles?` | `number` | number of cycle to delegate funds |

#### Returns

`Promise`<`string`\>

Subscription public key in base58 string format

___

### triggerPayment

▸ **triggerPayment**(`provider`, `subscription`): `Promise`<`void`\>

Tries to trigger payment of a subscription.

**`example`**
```typescript
const provider: Provider = getProvider();
const subscription: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
await triggerPayment(provider, subscription.toBase58());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscription` | `string` | Subscription public key in base58 format` |

#### Returns

`Promise`<`void`\>

___

### unsubscribe

▸ **unsubscribe**(`provider`, `subscriptionPlan`): `Promise`<`void`\>

Unsubscribe from a subscription plan

**`example`**
```typescript
const provider: Provider = getProvider();
const subscriptionPlan: PublicKey = getSubscriptionPlanPublicKey();
await unsubscribe(provider, subscriptionPlan.toBase58());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |
| `subscriptionPlan` | `string` | Subscription plan public key in base58 string format |

#### Returns

`Promise`<`void`\>
