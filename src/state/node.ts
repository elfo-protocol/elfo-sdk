import * as anchor from '@project-serum/anchor/';
import { Provider } from '@project-serum/anchor';
const { PublicKey } = anchor.web3;
import { getProgram } from '../program';
import { ELFO_PROTOCOL_PROGRAM_ID } from '../constants';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Represents a elfo node account
 */
export class ElfoNode {
  public isRegistered: boolean;
  public authority: string;
  public nodePaymentWallet: string;
  public nodePaymentAccount: string;

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a node instance from a public key
   *
   * @example
   * ```typescript
   * const provider: Provider = getProvider();
   * const nodeAddress: string = ElfoNode.address(provider.wallet.publicKey.toBase58());
   * const node: ElfoNode = ElfoNode.from(nodeAddress, provider);
   * ```
   *
   * @param nodePublicKey Public key of the node
   * @param provider Anchor connection provider
   *
   */
  public static from = async (nodePublicKey: string, provider: Provider): Promise<ElfoNode> => {
    const program = getProgram(provider);
    const node = await program.account.node.fetch(nodePublicKey);
    const { isRegistered, authority, nodePaymentWallet, nodePaymentAccount } = node;

    return {
      isRegistered,
      authority: authority.toBase58(),
      nodePaymentWallet: nodePaymentWallet.toBase58(),
      nodePaymentAccount: nodePaymentAccount.toBase58(),
    };
  };

  /**
   * Helper function to generate node PDA Address
   *
   * @param authority Public Key of node authority in base58 format
   * @returns PDA of the node in base58 format
   *
   * @example
   * ```typescript
   * const provider: Provider = getProvider();
   * const nodeAddress: string = ElfoNode.address(provider.wallet.publicKey.toBase58());
   * ```
   */
  public static address = (authority: string): string => {
    const [node] = anchor.utils.publicKey.findProgramAddressSync(
      [utf8.encode('node'), new PublicKey(authority).toBuffer()],
      ELFO_PROTOCOL_PROGRAM_ID,
    );
    return node.toBase58();
  };
}
