import { Provider, BN } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor/';
import { getProgram } from '../program';
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { DEFAULT_USDC_MINT } from '../constants';
import { SubscriptionPlanAuthor } from '../state/subscriptionPlanAuthor';
import { SubscriptionPlan } from '../state/subscriptionPlan';
import { ELFO_PROTOCOL_STATE } from '../constants';
const { SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } = anchor.web3;

/**
 * Creates a subscription plan
 *
 * @param provider  Anchor connection provider
 * @param name  Subscription plan name
 * @param amount Subscription amount without decimals
 * @param frequency Subscription frequency in seconds
 * @param feePercentage Fee percentage for plan (minimum 1, maximum 5)
 * @returns Base58 public key tuple [subscriptionPlan, subscriptionPlanAuthor] of plan and plan author
 *
 * @example
 * ```typescript
 * const provider: Provider = getProvider();
 * const name = "SEO course"
 * const amount = 20 // 20 USD
 * const frequency = 60 * 60 * 24 * 30 // 1 month
 * const feePercentage = 2;
 * const [plan, author] = await createSubscription(provider, name, frequency, feePercentage);
 * ```
 */
export const createSubscription = async (
  provider: Provider,
  name: string,
  amount: number,
  frequency: number,
  feePercentage: number,
): Promise<[string, string]> => {
  const program = getProgram(provider);
  const subscriptionPlanAuthor = SubscriptionPlanAuthor.address(provider.wallet.publicKey.toBase58());
  const subscriptionPlan = SubscriptionPlan.address(name, subscriptionPlanAuthor);

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
        protocolState: ELFO_PROTOCOL_STATE,
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
