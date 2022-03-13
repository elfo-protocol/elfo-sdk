import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_STATE } from '../constants';

/**
 * Represents the elfo protocol state account
 */
export class ProtocolState {
  public hasAlreadyBeenInitialized: boolean;
  public authority: string;
  public subscriptionPlanAccounts: string[];
  public registeredNodes: string[];

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
      authority: authority.toBase58(),
      subscriptionPlanAccounts: subscriptionPlanAccounts.map((a) => a.toBase58()),
      registeredNodes: registeredNodes.map((r) => r.toBase58()),
    };
  };
}
