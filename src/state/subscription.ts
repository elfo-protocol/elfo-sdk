import { PublicKey } from '@solana/web3.js';
import { Provider } from '@project-serum/anchor';
import { getProgram } from '../program';
import { DEFAULT_PROGRAM_ID } from '../constants';
import * as anchor from '@project-serum/anchor';
const utf8 = anchor.utils.bytes.utf8;

/**
 * Represents a subscription account
 */
export class Subscription {
  public hasAlreadyBeenInitialized: boolean;
  public subscriber: PublicKey;
  public subscriptionPlan: PublicKey;
  public isActive: boolean;
  public isCancelled: boolean;
  public lastPaymentTimestamp: number;
  public nextPaymentTimestamp: number;
  public cancellationReason: number;

  /**
   * @ignore
   */
  private constructor() {}

  /**
   * Fetches a subscription instance from a public key
   *
   * @param subscriptionPublicKey Public key of the subscription
   * @param provider Anchor connection provider
   *
   */
  public static from = async (subscriptionPublicKey: PublicKey, provider: Provider): Promise<Subscription> => {
    const program = getProgram(provider);
    const subscription = await program.account.subscription.fetch(subscriptionPublicKey);
    const {
      hasAlreadyBeenInitialized,
      subscriber,
      subscriptionPlan,
      isActive,
      isCancelled,
      lastPaymentTimestamp,
      nextPaymentTimestamp,
      cancellationReason,
    } = subscription;

    return {
      hasAlreadyBeenInitialized,
      subscriber,
      subscriptionPlan,
      isActive,
      isCancelled,
      lastPaymentTimestamp: lastPaymentTimestamp.toNumber(),
      nextPaymentTimestamp: nextPaymentTimestamp.toNumber(),
      cancellationReason,
    };
  };

  /**
   * Helper function to generate subscription PDA Address
   *
   * @param subscriber Public Key of subscriber state account
   * @param subscriptionPlan Public Key of the subscription plan
   *
   * @returns PDA of the subscription account
   */
  public static address = async (subscriber: PublicKey, subscriptionPlan: PublicKey): Promise<PublicKey> => {
    const [subscription] = await PublicKey.findProgramAddress(
      [utf8.encode('subscription'), subscriber.toBuffer(), subscriptionPlan.toBuffer()],
      DEFAULT_PROGRAM_ID,
    );

    return subscription;
  };
}
