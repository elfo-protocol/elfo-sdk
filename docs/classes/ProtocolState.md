[@elfo/sdk](../README.md) / [Exports](../modules.md) / ProtocolState

# Class: ProtocolState

Represents the elfo protocol state account

## Table of contents

### Properties

- [authority](ProtocolState.md#authority)
- [hasAlreadyBeenInitialized](ProtocolState.md#hasalreadybeeninitialized)
- [registeredNodes](ProtocolState.md#registerednodes)
- [subscriptionPlanAccounts](ProtocolState.md#subscriptionplanaccounts)

### Methods

- [fetch](ProtocolState.md#fetch)
- [protocolSigner](ProtocolState.md#protocolsigner)
- [protocolState](ProtocolState.md#protocolstate)

## Properties

### authority

• **authority**: `PublicKey`

#### Defined in

[state/protocol.ts:13](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L13)

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

[state/protocol.ts:12](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L12)

___

### registeredNodes

• **registeredNodes**: `PublicKey`[]

#### Defined in

[state/protocol.ts:15](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L15)

___

### subscriptionPlanAccounts

• **subscriptionPlanAccounts**: `PublicKey`[]

#### Defined in

[state/protocol.ts:14](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L14)

## Methods

### fetch

▸ `Static` **fetch**(`provider`): `Promise`<[`ProtocolState`](ProtocolState.md)\>

Fetches the protocol state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `default` | Anchor connection provider |

#### Returns

`Promise`<[`ProtocolState`](ProtocolState.md)\>

#### Defined in

[state/protocol.ts:28](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L28)

___

### protocolSigner

▸ `Static` **protocolSigner**(): `Promise`<`PublicKey`\>

Returns the Elfo protocol signer account

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[state/protocol.ts:44](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L44)

___

### protocolState

▸ `Static` **protocolState**(): `Promise`<`PublicKey`\>

Returns ELgo protocol state account

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[state/protocol.ts:52](https://github.com/subrina-protocol/subrina-sdk/blob/65fbcf2/src/state/protocol.ts#L52)
