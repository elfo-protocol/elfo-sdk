import * as anchor from '@project-serum/anchor';
import { Provider, BN } from '@project-serum/anchor';
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } from '@solana/web3.js';
import { DEFAULT_USDC_MINT, getProcolState, getProgram } from '../program';
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Creates a subscription plan
 *
 * @param provider  Anchor connection provider
 * @param name  Subscription plan name
 * @param amount Subscription amount without decimals
 * @param frequency Subscription frequency in seconds
 * @param feePercentage Fee percentage for plan (minimum 1, maximum 5)
 *
 * @example
 * ```typescript
 * const name = "SEO course"
 * const amount = 20 // 20 USD
 * const frequency = 60 * 60 * 24 * 30 // 1 month
 * const feePercentage = 2;
 * const [plan, author] = await createSubscription(provider, name, frequency, feePercentage);
 * ```
 *
 * @returns Public key tuple [subscriptionPlan, subscriptionPlanAuthor] of plan and plan author
 */
export const createSubscription = async (
  provider: Provider,
  name: string,
  amount: number,
  frequency: number,
  feePercentage: number,
): Promise<[PublicKey, PublicKey]> => {
  const program = getProgram(provider);
  const [subscriptionPlanAuthor] = await PublicKey.findProgramAddress(
    [utf8.encode('subscription_plan_author'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const [subscriptionPlan] = await PublicKey.findProgramAddress(
    [utf8.encode('subscription_plan'), utf8.encode(name), subscriptionPlanAuthor.toBuffer()],
    program.programId,
  );

  const ix = program.instruction.createSubscriptionPlan(
    name,
    new BN(amount),
    new BN(frequency),
    new BN(feePercentage),
    {
      accounts: {
        mint: DEFAULT_USDC_MINT,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        subscriptionPlan,
        subscriptionPlanAuthor,
        subscriptionPlanPaymentAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, provider.wallet.publicKey),
        tokenProgram: TOKEN_PROGRAM_ID,
        protocolState: await getProcolState(),
        rent: SYSVAR_RENT_PUBKEY,
        systemProgram: SystemProgram.programId,
        authority: provider.wallet.publicKey,
      },
    },
  );

  const tx = new Transaction({
    recentBlockhash: (await provider.connection.getLatestBlockhash()).blockhash,
    feePayer: provider.wallet.publicKey,
  }).add(ix);

  await provider.wallet.signTransaction(tx);
  await provider.send(tx);
  return [subscriptionPlan, subscriptionPlanAuthor];
};
