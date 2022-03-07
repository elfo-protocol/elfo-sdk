import { Provider } from '@project-serum/anchor';
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } from '@solana/web3.js';
import { getProgram } from '../program';
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { DEFAULT_USDC_MINT } from '../constants';
import { ElfoNode } from '../state/node';
import { ProtocolState } from '../state/protocol';

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
  const node = await ElfoNode.address(provider.wallet.publicKey);
  const ix = program.instruction.registerNode({
    accounts: {
      mint: DEFAULT_USDC_MINT,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      node,
      nodePaymentWallet,
      nodePaymentAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, nodePaymentWallet),
      tokenProgram: TOKEN_PROGRAM_ID,
      protocolState: await ProtocolState.protocolSigner(),
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
