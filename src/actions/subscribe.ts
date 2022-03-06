import * as anchor from '@project-serum/anchor';
import { Provider, BN } from '@project-serum/anchor';
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { getProgram, getProtocolSigner } from '../program';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SubscriptionPlan } from '../state/subscriptionPlan';
import { DEFAULT_USDC_MINT } from '../constants';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Subscribe to a subscription plan
 *
 * @param provider Anchor connection provider
 * @parma subscriptionPlan Subscription plan to subscribe
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
  const [subscriber] = await PublicKey.findProgramAddress(
    [utf8.encode('state'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const [subscription] = await PublicKey.findProgramAddress(
    [utf8.encode('subscription'), subscriber.toBuffer(), subscriptionPlan.toBuffer()],
    program.programId,
  );

  const plan = await SubscriptionPlan.from(subscriptionPlan, provider);

  const ix = program.instruction.subscribe(new BN(cyclesToDelegateFunds), {
    accounts: {
      clock: SYSVAR_CLOCK_PUBKEY,
      whoSubscribes: provider.wallet.publicKey,
      subscriptionPlanPaymentAccount: plan.subscriptionPlanPaymentAccount,
      protocolSigner: await getProtocolSigner(),
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
