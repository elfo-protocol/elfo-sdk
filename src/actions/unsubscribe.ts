import * as anchor from '@project-serum/anchor';
import { Provider } from '@project-serum/anchor';
import { PublicKey, Transaction } from '@solana/web3.js';
import { getProgram } from '../program';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Unsubscribe from a subscription plan
 *
 * @param provider Anchor connection provider
 * @parma subscriptionPlan Subscription plan to unsubscribe from
 *
 * @example
 * ```typescript
 * const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
 * await unsubscribe(provider, subscriptionPlan);
 * ```
 */
export const unsubscribe = async (provider: Provider, subscriptionPlan: PublicKey): Promise<void> => {
  const program = getProgram(provider);

  const [subscriber] = await PublicKey.findProgramAddress(
    [utf8.encode('state'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const [subscription] = await PublicKey.findProgramAddress(
    [utf8.encode('subscription'), subscriber.toBuffer(), subscriptionPlan.toBuffer()],
    program.programId,
  );

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
