import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from 'src/program';

/**
 * Represents a subrina node account
 */
export class SubrinaNode {
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
  public static from = async (nodePublicKey: PublicKey, provider: Provider): Promise<SubrinaNode> => {
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
}
