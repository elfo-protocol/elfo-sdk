import * as anchor from '@project-serum/anchor';
import { Provider } from '@project-serum/anchor';
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } from '@solana/web3.js';
import { DEFAULT_USDC_MINT, getProcolState, getProgram } from '../program';
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Registers a node that monitor subscriptions
 *
 * @param provider Anchor connection provider
 * @param nodePaymentWallet Payment wallet of node
 *
 * @example
 * ```typescript
 * const nodePaymentWallet = new PublicKey("8RsVYhJqtS96mnEfaSY2fKBQRdWDg6KZ6BWZrR1biS8i");
 * const nodeAddress: PublicKey = await registerNode(provider, nodePaymentWallet);
 * ```
 *
 * @returns Node public key
 */
export const registerNode = async (provider: Provider, nodePaymentWallet: PublicKey): Promise<PublicKey> => {
  const program = getProgram(provider);
  const [node] = await PublicKey.findProgramAddress(
    [utf8.encode('node'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const ix = program.instruction.registerNode({
    accounts: {
      mint: DEFAULT_USDC_MINT,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      node,
      nodePaymentWallet,
      nodePaymentAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, nodePaymentWallet),
      tokenProgram: TOKEN_PROGRAM_ID,
      protocolState: await getProcolState(),
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SystemProgram.programId,
      authority: provider.wallet.publicKey,
    },
  });

  const tx = new Transaction({
    recentBlockhash: (await provider.connection.getLatestBlockhash()).blockhash,
    feePayer: provider.wallet.publicKey,
  }).add(ix);

  await provider.wallet.signTransaction(tx);
  await provider.send(tx);
  return node;
};
