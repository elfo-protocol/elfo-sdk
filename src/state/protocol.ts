import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { DEFAULT_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const utf8 = anchor.utils.bytes.utf8;

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
    const protocolStatePublicKey = await ProtocolState.protocolState();
    const protocol = await program.account.protocol.fetch(protocolStatePublicKey);
    const { hasAlreadyBeenInitialized, authority, subscriptionPlanAccounts, registeredNodes } = protocol;
    return {
      hasAlreadyBeenInitialized,
      authority,
      subscriptionPlanAccounts,
      registeredNodes,
    };
  };

  /**
   * Returns the Elfo protocol signer account
   */
  public static protocolSigner = async (): Promise<PublicKey> => {
    const [protocolSigner] = await PublicKey.findProgramAddress([utf8.encode('protocol_signer')], DEFAULT_PROGRAM_ID);
    return protocolSigner;
  };

  /**
   * Returns ELgo protocol state account
   */
  public static protocolState = async (): Promise<PublicKey> => {
    const [protocolState] = await PublicKey.findProgramAddress([utf8.encode('protocol_state')], DEFAULT_PROGRAM_ID);
    return protocolState;
  };
}
