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

## Properties

### authority

• **authority**: `string`

___

### hasAlreadyBeenInitialized

• **hasAlreadyBeenInitialized**: `boolean`

___

### registeredNodes

• **registeredNodes**: `string`[]

___

### subscriptionPlanAccounts

• **subscriptionPlanAccounts**: `string`[]

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
