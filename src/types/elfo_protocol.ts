export type ElfoProtocol = {
  version: '0.1.0';
  name: 'elfo_protocol';
  instructions: [
    {
      name: 'initialize';
      accounts: [
        {
          name: 'protocolSigner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'subscribe';
      accounts: [
        {
          name: 'whoSubscribes';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'protocolSigner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscription';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriber';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriberPaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlan';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlanPaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'howManyCycles';
          type: 'i64';
        },
      ];
    },
    {
      name: 'unsubscribe';
      accounts: [
        {
          name: 'whoUnsubscribes';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'subscription';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriber';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlan';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'createSubscriptionPlan';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'protocolState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlanAuthor';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlan';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlanPaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'planName';
          type: 'string';
        },
        {
          name: 'subscriptionAmount';
          type: 'i64';
        },
        {
          name: 'frequency';
          type: 'i64';
        },
        {
          name: 'feePercentage';
          type: 'i8';
        },
      ];
    },
    {
      name: 'closeSubscriptionPlan';
      accounts: [
        {
          name: 'subscriptionPlanAuthor';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'subscriptionPlan';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'triggerPayment';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'subscriberPaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolSigner';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscription';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriber';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'subscriptionPlanPaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'subscriptionPlan';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'node';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nodePaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nodePaymentWallet';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'registerNode';
      accounts: [
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'node';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nodePaymentAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'protocolState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nodePaymentWallet';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
  ];
  accounts: [
    {
      name: 'subscriber';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'hasAlreadyBeenInitialized';
            type: 'bool';
          },
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'subscriberPaymentAccount';
            type: 'publicKey';
          },
          {
            name: 'subscriptionAccounts';
            type: {
              vec: 'publicKey';
            };
          },
        ];
      };
    },
    {
      name: 'subscription';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'hasAlreadyBeenInitialized';
            type: 'bool';
          },
          {
            name: 'subscriber';
            type: 'publicKey';
          },
          {
            name: 'subscriptionPlan';
            type: 'publicKey';
          },
          {
            name: 'isActive';
            type: 'bool';
          },
          {
            name: 'isCancelled';
            type: 'bool';
          },
          {
            name: 'cancellationReason';
            type: 'i8';
          },
          {
            name: 'lastPaymentTimestamp';
            type: 'i64';
          },
          {
            name: 'nextPaymentTimestamp';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'subscriptionPlan';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'hasAlreadyBeenInitialized';
            type: 'bool';
          },
          {
            name: 'planName';
            type: 'string';
          },
          {
            name: 'subscriptionPlanAuthor';
            type: 'publicKey';
          },
          {
            name: 'subscriptionPlanPaymentAccount';
            type: 'publicKey';
          },
          {
            name: 'amount';
            type: 'i64';
          },
          {
            name: 'frequency';
            type: 'i64';
          },
          {
            name: 'isActive';
            type: 'bool';
          },
          {
            name: 'feePercentage';
            type: 'i8';
          },
          {
            name: 'subscriptionAccounts';
            type: {
              vec: 'publicKey';
            };
          },
        ];
      };
    },
    {
      name: 'subscriptionPlanAuthor';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'hasAlreadyBeenInitialized';
            type: 'bool';
          },
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'subscriptionPlanAccounts';
            type: {
              vec: 'publicKey';
            };
          },
        ];
      };
    },
    {
      name: 'protocol';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'hasAlreadyBeenInitialized';
            type: 'bool';
          },
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'subscriptionPlanAccounts';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'registeredNodes';
            type: {
              vec: 'publicKey';
            };
          },
        ];
      };
    },
    {
      name: 'protocolSigner';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'node';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'isRegistered';
            type: 'bool';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'authority';
            type: 'publicKey';
          },
          {
            name: 'nodePaymentWallet';
            type: 'publicKey';
          },
          {
            name: 'nodePaymentAccount';
            type: 'publicKey';
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'SubscriberNotInitialized';
      msg: 'Subscriber is not initialized.';
    },
    {
      code: 6001;
      name: 'SubsscriberInvalidStateAccount';
      msg: 'Invalid State account';
    },
    {
      code: 6002;
      name: 'SubscriptionNotInitialized';
      msg: 'Subscription is not initialized.';
    },
    {
      code: 6003;
      name: 'SubscriptionAlreadySubscribed';
      msg: 'User is already subscribed to the plan.';
    },
    {
      code: 6004;
      name: 'SubscriptionNotSubscribed';
      msg: 'User is not subscribed to the plan.';
    },
    {
      code: 6005;
      name: 'SubscriptionNotEnoughFunds';
      msg: 'Not enough funds in protocol wallet to subscribe.';
    },
    {
      code: 6006;
      name: 'SubscriptionNextPaymentTimestampNotReached';
      msg: 'Next payment timestamp not reached. Please try again later.';
    },
    {
      code: 6007;
      name: 'SubscriptionPlanNotInitialized';
      msg: 'Subscription plan is not initialized.';
    },
    {
      code: 6008;
      name: 'SubscriptionPlanAmountInvalid';
      msg: 'Subscription amount must be in the range of 1 - 1000 USDC.';
    },
    {
      code: 6009;
      name: 'SubscriptionPlanInactive';
      msg: 'Subscription plan is inactive.';
    },
    {
      code: 6010;
      name: 'SubscriptionPlanAlreadyClosed';
      msg: 'Subscription plan is already closed.';
    },
    {
      code: 6011;
      name: 'SubscriptionPlanFrequencyError';
      msg: 'Subscription plan frequency must be atleast 60 seconds.';
    },
    {
      code: 6012;
      name: 'SubscriptionPlanUnauthorizedToClose';
      msg: 'Unauthorized to close subscription.';
    },
    {
      code: 6013;
      name: 'SubscriptionPlanInvalidPaymentAccount';
      msg: 'Invalid payment account provided.';
    },
    {
      code: 6014;
      name: 'SubscriptionPlanFeeError';
      msg: 'Fee percentage must be between 1% and 5%';
    },
    {
      code: 6015;
      name: 'InvalidMint';
      msg: 'Invalid mint.';
    },
    {
      code: 6016;
      name: 'NodeErrorUnauthorized';
      msg: 'Unauthorized to perform the action.';
    },
    {
      code: 6017;
      name: 'NodeNotRegistered';
      msg: 'Node not registered.';
    },
  ];
};

export const IDL: ElfoProtocol = {
  version: '0.1.0',
  name: 'elfo_protocol',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'protocolSigner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'subscribe',
      accounts: [
        {
          name: 'whoSubscribes',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'protocolSigner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscription',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriber',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriberPaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlan',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlanPaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'howManyCycles',
          type: 'i64',
        },
      ],
    },
    {
      name: 'unsubscribe',
      accounts: [
        {
          name: 'whoUnsubscribes',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'subscription',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriber',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlan',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'createSubscriptionPlan',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'protocolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlanAuthor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlan',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlanPaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'planName',
          type: 'string',
        },
        {
          name: 'subscriptionAmount',
          type: 'i64',
        },
        {
          name: 'frequency',
          type: 'i64',
        },
        {
          name: 'feePercentage',
          type: 'i8',
        },
      ],
    },
    {
      name: 'closeSubscriptionPlan',
      accounts: [
        {
          name: 'subscriptionPlanAuthor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'subscriptionPlan',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: 'triggerPayment',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'subscriberPaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolSigner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscription',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriber',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'subscriptionPlanPaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'subscriptionPlan',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'node',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nodePaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nodePaymentWallet',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'registerNode',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'node',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nodePaymentAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protocolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nodePaymentWallet',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'subscriber',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'hasAlreadyBeenInitialized',
            type: 'bool',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'subscriberPaymentAccount',
            type: 'publicKey',
          },
          {
            name: 'subscriptionAccounts',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'subscription',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'hasAlreadyBeenInitialized',
            type: 'bool',
          },
          {
            name: 'subscriber',
            type: 'publicKey',
          },
          {
            name: 'subscriptionPlan',
            type: 'publicKey',
          },
          {
            name: 'isActive',
            type: 'bool',
          },
          {
            name: 'isCancelled',
            type: 'bool',
          },
          {
            name: 'cancellationReason',
            type: 'i8',
          },
          {
            name: 'lastPaymentTimestamp',
            type: 'i64',
          },
          {
            name: 'nextPaymentTimestamp',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'subscriptionPlan',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'hasAlreadyBeenInitialized',
            type: 'bool',
          },
          {
            name: 'planName',
            type: 'string',
          },
          {
            name: 'subscriptionPlanAuthor',
            type: 'publicKey',
          },
          {
            name: 'subscriptionPlanPaymentAccount',
            type: 'publicKey',
          },
          {
            name: 'amount',
            type: 'i64',
          },
          {
            name: 'frequency',
            type: 'i64',
          },
          {
            name: 'isActive',
            type: 'bool',
          },
          {
            name: 'feePercentage',
            type: 'i8',
          },
          {
            name: 'subscriptionAccounts',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'subscriptionPlanAuthor',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'hasAlreadyBeenInitialized',
            type: 'bool',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'subscriptionPlanAccounts',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'protocol',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'hasAlreadyBeenInitialized',
            type: 'bool',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'subscriptionPlanAccounts',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'registeredNodes',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'protocolSigner',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'node',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'isRegistered',
            type: 'bool',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'nodePaymentWallet',
            type: 'publicKey',
          },
          {
            name: 'nodePaymentAccount',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'SubscriberNotInitialized',
      msg: 'Subscriber is not initialized.',
    },
    {
      code: 6001,
      name: 'SubsscriberInvalidStateAccount',
      msg: 'Invalid State account',
    },
    {
      code: 6002,
      name: 'SubscriptionNotInitialized',
      msg: 'Subscription is not initialized.',
    },
    {
      code: 6003,
      name: 'SubscriptionAlreadySubscribed',
      msg: 'User is already subscribed to the plan.',
    },
    {
      code: 6004,
      name: 'SubscriptionNotSubscribed',
      msg: 'User is not subscribed to the plan.',
    },
    {
      code: 6005,
      name: 'SubscriptionNotEnoughFunds',
      msg: 'Not enough funds in protocol wallet to subscribe.',
    },
    {
      code: 6006,
      name: 'SubscriptionNextPaymentTimestampNotReached',
      msg: 'Next payment timestamp not reached. Please try again later.',
    },
    {
      code: 6007,
      name: 'SubscriptionPlanNotInitialized',
      msg: 'Subscription plan is not initialized.',
    },
    {
      code: 6008,
      name: 'SubscriptionPlanAmountInvalid',
      msg: 'Subscription amount must be in the range of 1 - 1000 USDC.',
    },
    {
      code: 6009,
      name: 'SubscriptionPlanInactive',
      msg: 'Subscription plan is inactive.',
    },
    {
      code: 6010,
      name: 'SubscriptionPlanAlreadyClosed',
      msg: 'Subscription plan is already closed.',
    },
    {
      code: 6011,
      name: 'SubscriptionPlanFrequencyError',
      msg: 'Subscription plan frequency must be atleast 60 seconds.',
    },
    {
      code: 6012,
      name: 'SubscriptionPlanUnauthorizedToClose',
      msg: 'Unauthorized to close subscription.',
    },
    {
      code: 6013,
      name: 'SubscriptionPlanInvalidPaymentAccount',
      msg: 'Invalid payment account provided.',
    },
    {
      code: 6014,
      name: 'SubscriptionPlanFeeError',
      msg: 'Fee percentage must be between 1% and 5%',
    },
    {
      code: 6015,
      name: 'InvalidMint',
      msg: 'Invalid mint.',
    },
    {
      code: 6016,
      name: 'NodeErrorUnauthorized',
      msg: 'Unauthorized to perform the action.',
    },
    {
      code: 6017,
      name: 'NodeNotRegistered',
      msg: 'Node not registered.',
    },
  ],
};
