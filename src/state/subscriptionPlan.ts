import { PublicKey } from '@solana/web3.js';
import { BN, Provider } from '@project-serum/anchor';
import { getProgram } from 'src/program';

/**
 * Represents a subscription plan
 */
export class SubscriptionPlan {
  public hasAlreadyBeenInitialized: boolean;
  public planName: string;
  public subscriptionPlanAuthor: PublicKey;
  public subscriptionPlanPaymentAccount: PublicKey;
  public amount: BN;
  public frequency: BN;
  public isActive: boolean;
  public feePercentage: number;
  public subscriptionAccounts: PublicKey[];

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a subscription plan instance from a public key
   *
   * @param subscriptionPlanPublicKey Public key of the subscription
   * @param provider Anchor connection provider
   *
   */
  public static from = async (subscriptionPlanPublicKey: PublicKey, provider: Provider): Promise<SubscriptionPlan> => {
    const program = getProgram(provider);
    const plan = await program.account.subscriptionPlan.fetch(subscriptionPlanPublicKey);
    const {
      hasAlreadyBeenInitialized,
      planName,
      subscriptionPlanAuthor,
      subscriptionPlanPaymentAccount,
      amount,
      frequency,
      isActive,
      feePercentage,
      subscriptionAccounts,
    } = plan;

    return {
      hasAlreadyBeenInitialized,
      planName,
      subscriptionPlanAuthor,
      subscriptionPlanPaymentAccount,
      amount,
      frequency,
      isActive,
      feePercentage,
      subscriptionAccounts,
    };
  };
}
