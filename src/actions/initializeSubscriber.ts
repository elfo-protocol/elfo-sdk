import * as anchor from '@project-serum/anchor';
import { Provider } from '@project-serum/anchor';
import { PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } from '@solana/web3.js';
import { getProgram } from '../program';
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { DEFAULT_USDC_MINT } from '../constants';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Initialize a subscriber
 *
 * @param provider Anchor connection provider
 *
 * @example
 * ```typescript
 * const subscriber: PublicKey = await initializeSubscriber(provider);
 * ```
 *
 * @returns Subscriber public key
 */
export const initializeSubscriber = async (provider: Provider): Promise<PublicKey> => {
  const program = getProgram(provider);
  const [subscriber] = await PublicKey.findProgramAddress(
    [utf8.encode('state'), provider.wallet.publicKey.toBuffer()],
    program.programId,
  );

  const ix = program.instruction.initializeSubscriber({
    accounts: {
      whoSubscribes: provider.wallet.publicKey,
      subscriberTokenAccount: await getAssociatedTokenAddress(DEFAULT_USDC_MINT, provider.wallet.publicKey),
      subscriber,
      mint: DEFAULT_USDC_MINT,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
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
