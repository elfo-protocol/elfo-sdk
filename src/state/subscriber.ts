import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Represents a subscriber account
 */
export class Subscriber {
  public hasAlreadyBeenInitialized: boolean;
  public authority: PublicKey;
  public subscriberPaymentAccount: PublicKey;
  public subscriptionAccounts: PublicKey[];

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a subscriber instance from a public key
   *
   * @param subscriberPublicKey Public key of the subscription
   * @param provider Anchor connection provider
   *
   */
  public static from = async (subscriberPublicKey: PublicKey, provider: Provider): Promise<Subscriber> => {
    const program = getProgram(provider);
    const subscriber = await program.account.subscriber.fetch(subscriberPublicKey);
    const { hasAlreadyBeenInitialized, authority, subscriberPaymentAccount, subscriptionAccounts } = subscriber;

    return {
      hasAlreadyBeenInitialized,
      authority,
      subscriberPaymentAccount,
      subscriptionAccounts,
    };
  };

  /**
   * Helper function to generate subscriber PDA Address
   *
   * @param authority Public Key of subscriber authority
   * @returns PDA of the subscriber account
   */
  public static address = async (authority: PublicKey): Promise<PublicKey> => {
    const [subscriber] = await PublicKey.findProgramAddress(
      [utf8.encode('state'), authority.toBuffer()],
      ELFO_PROTOCOL_PROGRAM_ID,
    );
    return subscriber;
  };
}
