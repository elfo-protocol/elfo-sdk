import { Provider } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor/';
import { getProgram } from '../program';
import { Subscriber } from '../state/subscriber';
import { Subscription } from '../state/subscription';
const { PublicKey, Transaction } = anchor.web3;
/**
 * Unsubscribe from a subscription plan
 *
 * @param provider Anchor connection provider
 * @param subscriptionPlan Subscription plan public key in base58 string format
 *
 * @example
 * ```typescript
 * const provider: Provider = getProvider();
 * const subscriptionPlan: PublicKey = getSubscriptionPlanPublicKey();
 * await unsubscribe(provider, subscriptionPlan.toBase58());
 * ```
 */
export const unsubscribe = async (provider: Provider, subscriptionPlan: string): Promise<void> => {
  const program = getProgram(provider);
  const subscriber = new PublicKey(Subscriber.address(provider.wallet.publicKey.toBase58()));
  const subscription = new PublicKey(Subscription.address(subscriber.toBase58(), subscriptionPlan));

  const ix = program.instruction.unsubscribe({
    accounts: {
      whoUnsubscribes: provider.wallet.publicKey,
      subscriptionPlan,
      subscriber,
      subscription,
    },
  });

  const tx = new Transaction({
    recentBlockhash: (await provider.connection.getLatestBlockhash()).blockhash,
    feePayer: provider.wallet.publicKey,
  }).add(ix);

  await provider.wallet.signTransaction(tx);
  await provider.send(tx);
};
