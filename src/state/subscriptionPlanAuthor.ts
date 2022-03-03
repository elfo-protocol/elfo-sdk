import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from 'src/program';

/**
 * Represents a subscription plan author account
 */
export class SubscriptionPlanAuthor {
  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a subscription plan author instance from a public key
   *
   * @param subscriptionPublicKey Public key of the subscription plan author
   * @param provider Anchor connection provider
   *
   */
  public static from = async (
    subscriptionPlanAuthorPublicKey: PublicKey,
    provider: Provider,
  ): Promise<SubscriptionPlanAuthor> => {
    const program = getProgram(provider);
    const subscriptionPlanAuthor = await program.account.subscriptionPlanAuthor.fetch(subscriptionPlanAuthorPublicKey);
    const { hasAlreadyBeenInitialized, authority, subscriptionPlanAccounts } = subscriptionPlanAuthor;

    return {
      hasAlreadyBeenInitialized,
      authority,
      subscriptionPlanAccounts,
    };
  };
}
