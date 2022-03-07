import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const utf8 = anchor.utils.bytes.utf8;

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
   * @param subscriptionPlanAuthorPublicKey Public key of the subscription plan author
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

  /**
   * Helper function to generate subscription author PDA Address
   *
   * @param authority Creator of the subscription plan
   *
   * @returns PDA of the subscription author account
   */
  public static address = async (authority: PublicKey): Promise<PublicKey> => {
    const [subscriptionPlanAuthor] = await PublicKey.findProgramAddress(
      [utf8.encode('subscription_plan_author'), authority.toBuffer()],
      ELFO_PROTOCOL_PROGRAM_ID,
    );
    return subscriptionPlanAuthor;
  };
}
