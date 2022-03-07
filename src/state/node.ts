import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import * as anchor from '@project-serum/anchor';
import { DEFAULT_PROGRAM_ID } from '../constants';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Represents a elfo node account
 */
export class ElfoNode {
  public isRegistered: boolean;
  public authority: PublicKey;
  public nodePaymentWallet: PublicKey;
  public nodePaymentAccount: PublicKey;

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a node instance from a public key
   *
   * @param nodePublicKey Public key of the node
   * @param provider Anchor connection provider
   *
   */
  public static from = async (nodePublicKey: PublicKey, provider: Provider): Promise<ElfoNode> => {
    const program = getProgram(provider);
    const node = await program.account.node.fetch(nodePublicKey);
    const { isRegistered, authority, nodePaymentWallet, nodePaymentAccount } = node;

    return {
      isRegistered,
      authority,
      nodePaymentWallet,
      nodePaymentAccount,
    };
  };

  /**
   * Helper function to generate node PDA Address
   *
   * @param authority Public Key of node authority
   * @returns PDA of the node
   */
  public static address = async (authority: PublicKey): Promise<PublicKey> => {
    const [node] = await PublicKey.findProgramAddress([utf8.encode('node'), authority.toBuffer()], DEFAULT_PROGRAM_ID);
    return node;
  };
}
