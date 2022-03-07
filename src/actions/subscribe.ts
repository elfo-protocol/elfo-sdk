import { Provider, BN } from '@project-serum/anchor';
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { getProgram } from '../program';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SubscriptionPlan } from '../state/subscriptionPlan';
import { DEFAULT_USDC_MINT } from '../constants';
import { ASSOCIATED_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';
import { Subscriber } from '../state/subscriber';
import { Subscription } from '../state/subscription';
import { ELFO_PROTOCOL_SIGNER } from '../constants';

/**
 * Subscribe to a subscription plan
 *
 * @param provider Anchor connection provider
 * @param subscriptionPlan Subscription plan to subscribe
 * @param numberOfCycles  number of cycle to delegate funds
 *
 * @example
 * ```typescript
 * const subscriptionPlan: PublicKey = new PublicKey("E1Q62AgA77TuFFHPJxmcRXcD2tgsSsMEwEL3kxd17MfA");
 * const subscription: PublicKey = await subscribe(provider, subscriptionPlan);
 * ```
 *
 * @returns Subscription public key
 */
export const subscribe = async (
  provider: Provider,
  subscriptionPlan: PublicKey,
  numberOfCycles?: number,
): Promise<PublicKey> => {
  const cyclesToDelegateFunds = numberOfCycles ? numberOfCycles : 1000;
  const program = getProgram(provider);
  const subscriber = await Subscriber.address(provider.wallet.publicKey);
  const subscription = await Subscription.address(subscriber, subscriptionPlan);

  const plan = await SubscriptionPlan.from(subscriptionPlan, provider);

  const ix = program.instruction.subscribe(new BN(cyclesToDelegateFunds), {
    accounts: {
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
      clock: SYSVAR_CLOCK_PUBKEY,
      whoSubscribes: provider.wallet.publicKey,
      subscriptionPlanPaymentAccount: plan.subscriptionPlanPaymentAccount,
      protocolSigner: ELFO_PROTOCOL_SIGNER,
      subscriptionPlan,
      subscription,
      subscriberPaymentAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, provider.wallet.publicKey),
      subscriber,
      mint: DEFAULT_USDC_MINT,
      tokenProgram: TOKEN_PROGRAM_ID,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SystemProgram.programId,
    },
  });

  const tx = new Transaction({
    recentBlockhash: (await provider.connection.getLatestBlockhash()).blockhash,
    feePayer: provider.wallet.publicKey,
  }).add(ix);

  await provider.wallet.signTransaction(tx);
  await provider.send(tx);
  return subscriber;
};
