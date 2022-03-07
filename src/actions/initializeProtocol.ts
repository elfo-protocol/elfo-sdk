import { Provider } from '@project-serum/anchor';
import { SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } from '@solana/web3.js';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_STATE, ELFO_PROTOCOL_SIGNER } from '../constants';

/**
 * Initialize an instance of elfo protocol for debugging purposes.
 * This is generally not something you will want to do.
 * @ignore
 */
export const initializeProtocol = async (provider: Provider): Promise<void> => {
  const program = getProgram(provider);
  const ix = program.instruction.initialize({
    accounts: {
      protocolState: ELFO_PROTOCOL_STATE,
      protocolSigner: ELFO_PROTOCOL_SIGNER,
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
};
