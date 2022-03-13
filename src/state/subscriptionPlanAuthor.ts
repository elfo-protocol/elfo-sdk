import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const utf8 = anchor.utils.bytes.utf8;
const { PublicKey } = anchor.web3;

/**
 * Represents a subscription plan author account
 */
export class SubscriptionPlanAuthor {
  public publicKey: string;
  public hasAlreadyBeenInitialized: boolean;
  public authority: string;
  public subscriptionPlanAccounts: string[];

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
    subscriptionPlanAuthorPublicKey: string,
    provider: Provider,
  ): Promise<SubscriptionPlanAuthor> => {
    const program = getProgram(provider);
    const subscriptionPlanAuthor = await program.account.subscriptionPlanAuthor.fetch(subscriptionPlanAuthorPublicKey);
    const { hasAlreadyBeenInitialized, authority, subscriptionPlanAccounts } = subscriptionPlanAuthor;

    return {
      publicKey: subscriptionPlanAuthorPublicKey,
      hasAlreadyBeenInitialized,
      authority: authority.toBase58(),
      subscriptionPlanAccounts: subscriptionPlanAccounts.map((s) => s.toBase58()),
    };
  };

  /**
   * Helper function to generate subscription author PDA Address
   *
   * @param authority Creator of the subscription plan
   *
   * @returns PDA of the subscription author account
   */
  public static address = (authority: string): string => {
    const [subscriptionPlanAuthor] = anchor.utils.publicKey.findProgramAddressSync(
      [utf8.encode('subscription_plan_author'), new PublicKey(authority).toBuffer()],
      ELFO_PROTOCOL_PROGRAM_ID,
    );
    return subscriptionPlanAuthor.toBase58();
  };
}
