import { Provider, BN } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor/';
import { getProgram } from '../program';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SubscriptionPlan } from '../state/subscriptionPlan';
import { DEFAULT_USDC_MINT } from '../constants';
import { ASSOCIATED_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';
import { Subscriber } from '../state/subscriber';
import { Subscription } from '../state/subscription';
import { ELFO_PROTOCOL_SIGNER } from '../constants';
const { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction, SYSVAR_CLOCK_PUBKEY } = anchor.web3;

/**
 * Subscribe to a subscription plan
 *
 * @param provider Anchor connection provider
 * @param subscriptionPlan Subscription plan public key in base58 string format
 * @param numberOfCycles  number of cycle to delegate funds
 * @returns Subscription public key in base58 string format
 *
 * @example
 * ```typescript
 * const provider: Provider = getProvider();
 * const subscriptionPlan: PublicKey = getSubscriptionPlanPublicKey();
 * const subscription: string = await subscribe(provider, subscriptionPlan.toBase58());
 * ```
 */
export const subscribe = async (
  provider: Provider,
  subscriptionPlan: string,
  numberOfCycles?: number,
): Promise<string> => {
  const cyclesToDelegateFunds = numberOfCycles ? numberOfCycles : 1000;
  const program = getProgram(provider);
  const subscriber = new PublicKey(Subscriber.address(provider.wallet.publicKey.toBase58()));
  const subscription = new PublicKey(Subscription.address(subscriber.toBase58(), subscriptionPlan));

  const plan = await SubscriptionPlan.from(subscriptionPlan, provider);

  const ix = program.instruction.subscribe(new BN(cyclesToDelegateFunds), {
    accounts: {
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
      clock: SYSVAR_CLOCK_PUBKEY,
      whoSubscribes: provider.wallet.publicKey,
      subscriptionPlanPaymentAccount: plan.subscriptionPlanPaymentAccount,
      protocolSigner: ELFO_PROTOCOL_SIGNER,
      subscriptionPlan: new PublicKey(subscriptionPlan),
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
  return subscriber.toBase58();
};
