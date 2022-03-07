import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_STATE } from '../constants';

/**
 * Represents the elfo protocol state account
 */
export class ProtocolState {
  public hasAlreadyBeenInitialized: boolean;
  public authority: PublicKey;
  public subscriptionPlanAccounts: PublicKey[];
  public registeredNodes: PublicKey[];

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches the protocol state
   *
   * @param provider Anchor connection provider
   *
   */
  public static fetch = async (provider: Provider): Promise<ProtocolState> => {
    const program = getProgram(provider);
    const protocol = await program.account.protocol.fetch(ELFO_PROTOCOL_STATE);
    const { hasAlreadyBeenInitialized, authority, subscriptionPlanAccounts, registeredNodes } = protocol;
    return {
      hasAlreadyBeenInitialized,
      authority,
      subscriptionPlanAccounts,
      registeredNodes,
    };
  };
}
