import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProcolState, getProgram } from '../program';

/**
 * Represents the subrina protocol state account
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
    const protocolStatePublicKey = await getProcolState();
    const protocol = await program.account.protocol.fetch(protocolStatePublicKey);
    const { hasAlreadyBeenInitialized, authority, subscriptionPlanAccounts, registeredNodes } = protocol;
    return {
      hasAlreadyBeenInitialized,
      authority,
      subscriptionPlanAccounts,
      registeredNodes,
    };
  };
}
