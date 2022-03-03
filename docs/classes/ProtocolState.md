[@subrina-protocol/sdk](../README.md) / [Exports](../modules.md) / ProtocolState

# Class: ProtocolState

Represents the subrina protocol state account

## Table of contents

### Properties

- [authority](ProtocolState.md#authority)
- [hasAlreadyBeenInitialized](ProtocolState.md#hasalreadybeeninitialized)
- [registeredNodes](ProtocolState.md#registerednodes)
- [subscriptionPlanAccounts](ProtocolState.md#subscriptionplanaccounts)

### Methods

- [fetch](ProtocolState.md#fetch)

## Properties

### authority

• **authority**: `PublicKey`

#### Defined in

state/protocol.ts:10

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

#### Defined in

state/protocol.ts:9

___

### registeredNodes

• **registeredNodes**: `PublicKey`[]

#### Defined in

state/protocol.ts:12

___

### subscriptionPlanAccounts

• **subscriptionPlanAccounts**: `PublicKey`[]

#### Defined in

state/protocol.ts:11

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

state/protocol.ts:25
