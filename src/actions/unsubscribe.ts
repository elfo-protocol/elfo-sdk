import { Provider } from '@project-serum/anchor';
import { PublicKey, Transaction } from '@solana/web3.js';
import { getProgram } from '../program';
import { Subscriber } from '../state/subscriber';
import { Subscription } from '../state/subscription';

/**
 * Unsubscribe from a subscription plan
 *
 * @param provider Anchor connection provider
 * @param subscriptionPlan Subscription plan to unsubscribe from
 *
 * @example
 * ```typescript
 * const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
 * await unsubscribe(provider, subscriptionPlan);
 * ```
 */
export const unsubscribe = async (provider: Provider, subscriptionPlan: PublicKey): Promise<void> => {
  const program = getProgram(provider);
  const subscriber = await Subscriber.address(provider.wallet.publicKey);
  const subscription = await Subscription.address(subscriber, subscriptionPlan);

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
