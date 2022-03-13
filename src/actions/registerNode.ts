import { Provider } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor';
import { getProgram } from '../program';
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { DEFAULT_USDC_MINT } from '../constants';
import { ElfoNode } from '../state/node';
import { ELFO_PROTOCOL_STATE } from '../constants';
const { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } = anchor.web3;

/**
 * Registers a node that monitor subscriptions
 *
 * @param provider Anchor connection provider
 * @param nodePaymentWallet Payment wallet of node in base58 string format
 * @returns Node public key in base58 string format
 *
 * @example
 * ```typescript
 * const provider: Provider = getProvider();
 * const nodePaymentWallet: PublicKey = getNodePaymentWallet();
 * const nodeAddress: string = await registerNode(provider, nodePaymentWallet.toBase58());
 * ```
 */
export const registerNode = async (provider: Provider, nodePaymentWallet: string): Promise<string> => {
  const program = getProgram(provider);
  const node = ElfoNode.address(provider.wallet.publicKey.toBase58());
  const ix = program.instruction.registerNode({
    accounts: {
      mint: DEFAULT_USDC_MINT,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      node: new PublicKey(node),
      nodePaymentWallet: new PublicKey(nodePaymentWallet),
      nodePaymentAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, new PublicKey(nodePaymentWallet)),
      tokenProgram: TOKEN_PROGRAM_ID,
      protocolState: ELFO_PROTOCOL_STATE,
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
