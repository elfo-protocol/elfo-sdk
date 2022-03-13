import { Provider } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor/';
import { getProgram } from '../program';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SubscriptionPlan } from '../state/subscriptionPlan';
import { ElfoNode } from '../state/node';
import { DEFAULT_USDC_MINT } from '../constants';
import { Subscription } from '../state/subscription';
import { Subscriber } from '../state/subscriber';
import { ELFO_PROTOCOL_SIGNER } from '../constants';
const { PublicKey, Transaction, SYSVAR_CLOCK_PUBKEY } = anchor.web3;

/**
 * Tries to trigger payment of a subscription.
 *
 * @param provider Anchor connection provider
 * @param subscription Subscription public key in base58 format`
 *
 * @example
 * ```typescript
 * const provider: Provider = getProvider();
 * const subscription: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
 * await triggerPayment(provider, subscription.toBase58());
 * ```
 */
export const triggerPayment = async (provider: Provider, subscription: string): Promise<void> => {
  const program = getProgram(provider);
  const subscriptionAccount = await Subscription.from(subscription, provider);
  const subscriber = subscriptionAccount.subscriber;
  const subscriberAccount = await Subscriber.from(subscriber, provider);

  const subscriptionPlanAccount = await SubscriptionPlan.from(subscriptionAccount.subscriptionPlan, provider);
  const subscriptionPlanPaymentAccount = subscriptionPlanAccount.subscriptionPlanPaymentAccount;
  const subscriberPaymentAccount = subscriberAccount.subscriberPaymentAccount;

  const node = new PublicKey(ElfoNode.address(provider.wallet.publicKey.toBase58()));
  const nodeAccount = await ElfoNode.from(node.toBase58(), provider);

  const ix = program.instruction.triggerPayment({
    accounts: {
      node,
      nodePaymentAccount: nodeAccount.nodePaymentAccount,
      nodePaymentWallet: nodeAccount.nodePaymentWallet,
      subscriptionPlan: subscriptionAccount.subscriptionPlan,
      clock: SYSVAR_CLOCK_PUBKEY,
      authority: provider.wallet.publicKey,
      subscriptionPlanPaymentAccount,
      protocolSigner: ELFO_PROTOCOL_SIGNER,
      subscription: new PublicKey(subscription),
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
