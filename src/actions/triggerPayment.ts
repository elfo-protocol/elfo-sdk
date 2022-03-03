import * as anchor from '@project-serum/anchor';
import { Provider } from '@project-serum/anchor';
import { PublicKey, Transaction, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { DEFAULT_USDC_MINT, getProgram, getProtocolSigner } from '../program';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SubscriptionPlan } from 'src/state/subscriptionPlan';
import { SubrinaNode, Subscription } from 'src';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Tries to trigger payment of a subscription.
 *
 * @param provider Anchor connection provider
 * @parma subscription Subscription to try trigger payment
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
  const [subscriber] = await PublicKey.findProgramAddress(
    [utf8.encode('state'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const subscriptionAccount = await Subscription.from(subscription, provider);
  const subscriptionPlanAccount = await SubscriptionPlan.from(subscriptionAccount.subscriptionPlan, provider);

  const [node] = await PublicKey.findProgramAddress(
    [utf8.encode('node'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const nodeAccount = await SubrinaNode.from(node, provider);

  const ix = program.instruction.triggerPayment({
    accounts: {
      node,
      nodePaymentAccount: nodeAccount.nodePaymentAccount,
      nodePaymentWallet: nodeAccount.nodePaymentWallet,
      subscriptionPlan: subscriptionAccount.subscriptionPlan,
      clock: SYSVAR_CLOCK_PUBKEY,
      authority: provider.wallet.publicKey,
      subscriptionPlanPaymentAccount: subscriptionPlanAccount.subscriptionPlanPaymentAccount,
      protocolSigner: await getProtocolSigner(),
      subscription,
      subscriberPaymentAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, provider.wallet.publicKey),
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
