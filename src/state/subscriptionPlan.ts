import { BN, Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { ELFO_PROTOCOL_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const { PublicKey } = anchor.web3;
const utf8 = anchor.utils.bytes.utf8;

/**
 * Represents a subscription plan
 */
export class SubscriptionPlan {
  public hasAlreadyBeenInitialized: boolean;
  public planName: string;
  public subscriptionPlanAuthor: string;
  public subscriptionPlanPaymentAccount: string;
  public amount: BN;
  public frequency: BN;
  public isActive: boolean;
  public feePercentage: number;
  public subscriptionAccounts: string[];

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
  public static from = async (subscriptionPlanPublicKey: string, provider: Provider): Promise<SubscriptionPlan> => {
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
      subscriptionPlanAuthor: subscriptionPlanAuthor.toBase58(),
      subscriptionPlanPaymentAccount: subscriptionPlanPaymentAccount.toBase58(),
      amount,
      frequency,
      isActive,
      feePercentage,
      subscriptionAccounts: subscriptionAccounts.map((a) => a.toBase58()),
    };
  };

  /**
   * Helper function to generate subscription plan PDA Address
   *
   * @param planName subscription plan name
   * @param planAuthor subscription plan author account address
   *
   * @returns PDA of the subscription plan account
   */
  public static address = (planName: string, planAuthor: string): string => {
    const [subscriptionPlan] = anchor.utils.publicKey.findProgramAddressSync(
      [utf8.encode('subscription_plan'), utf8.encode(planName), new PublicKey(planAuthor).toBuffer()],
      ELFO_PROTOCOL_PROGRAM_ID,
    );
    return subscriptionPlan.toBase58();
  };
}
