import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from 'src/program';

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
}
