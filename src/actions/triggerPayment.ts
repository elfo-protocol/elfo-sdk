import { Provider } from '@project-serum/anchor';
import { PublicKey, Transaction, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { getProgram } from '../program';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SubscriptionPlan } from '../state/subscriptionPlan';
import { ElfoNode } from '../state/node';
import { DEFAULT_USDC_MINT } from '../constants';
import { Subscription } from '../state/subscription';
import { Subscriber } from '../state/subscriber';
import { ProtocolState } from '../state/protocol';

/**
 * Tries to trigger payment of a subscription.
 *
 * @param provider Anchor connection provider
 * @param subscription Subscription to try trigger payment
 *
 * @example
 * ```typescript
 * const subscription: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
 * await triggerPayment(provider, subscription);
 * ```
 *
 */
export const triggerPayment = async (provider: Provider, subscription: PublicKey): Promise<void> => {
  const program = getProgram(provider);
  const subscriptionAccount = await Subscription.from(subscription, provider);
  const subscriber = subscriptionAccount.subscriber;
  const subscriberAccount = await Subscriber.from(subscriber, provider);

  const subscriptionPlanAccount = await SubscriptionPlan.from(subscriptionAccount.subscriptionPlan, provider);
  const subscriptionPlanPaymentAccount = subscriptionPlanAccount.subscriptionPlanPaymentAccount;
  const subscriberPaymentAccount = subscriberAccount.subscriberPaymentAccount;

  const node = await ElfoNode.address(provider.wallet.publicKey);
  const nodeAccount = await ElfoNode.from(node, provider);

  const ix = program.instruction.triggerPayment({
    accounts: {
      node,
      nodePaymentAccount: nodeAccount.nodePaymentAccount,
      nodePaymentWallet: nodeAccount.nodePaymentWallet,
      subscriptionPlan: subscriptionAccount.subscriptionPlan,
      clock: SYSVAR_CLOCK_PUBKEY,
      authority: provider.wallet.publicKey,
      subscriptionPlanPaymentAccount,
      protocolSigner: await ProtocolState.protocolSigner(),
      subscription,
      subscriberPaymentAccount,
      subscriber,
      mint: DEFAULT_USDC_MINT,
      tokenProgram: TOKEN_PROGRAM_ID,
    },
  });

  const tx = new Transaction({
    recentBlockhash: (await provider.connection.getLatestBlockhash()).blockhash,
    feePayer: provider.wallet.publicKey,
  }).add(ix);

  await provider.wallet.signTransaction(tx);
  await provider.send(tx);
};
