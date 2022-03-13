import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const { PublicKey } = anchor.web3;
const utf8 = anchor.utils.bytes.utf8;

/**
 * Represents a subscriber account
 */
export class Subscriber {
  public hasAlreadyBeenInitialized: boolean;
  public authority: string;
  public subscriberPaymentAccount: string;
  public subscriptionAccounts: string[];

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a subscriber instance from a public key
   *
   * @param subscriberPublicKey Public key of the subscription in base58 format
   * @param provider Anchor connection provider
   *
   */
  public static from = async (subscriberPublicKey: string, provider: Provider): Promise<Subscriber> => {
    const program = getProgram(provider);
    const subscriber = await program.account.subscriber.fetch(subscriberPublicKey);
    const { hasAlreadyBeenInitialized, authority, subscriberPaymentAccount, subscriptionAccounts } = subscriber;

    return {
      hasAlreadyBeenInitialized,
      authority: authority.toBase58(),
      subscriberPaymentAccount: subscriberPaymentAccount.toBase58(),
      subscriptionAccounts: subscriptionAccounts.map((s) => s.toBase58()),
    };
  };

  /**
   * Helper function to generate subscriber PDA Address
   *
   * @param authority Public Key of subscriber authority
   * @returns PDA of the subscriber account in base58 format
   *
   * @example
   * ```typescript
   * const provider: Provider = getProvider();
   * const nodeAddress: string = ElfoNode.address(provider.wallet.publicKey.toBase58());
   * ```
   */
  public static address = (authority: string): string => {
    const [subscriber] = anchor.utils.publicKey.findProgramAddressSync(
      [utf8.encode('state'), new PublicKey(authority).toBuffer()],
      ELFO_PROTOCOL_PROGRAM_ID,
    );
    return subscriber.toBase58();
  };
}
