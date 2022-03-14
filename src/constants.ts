import * as anchor from '@project-serum/anchor/';
const PublicKey = anchor.web3.PublicKey;

/**
 * Program ID of ELFO protocol core program
 */
export const ELFO_PROTOCOL_PROGRAM_ID = new PublicKey('BJgusPC7xJRCGsFcwEwMGExkqdbYRGy3pugoKwkFDzZx');

/**
 *  ELFO Protocol signer account
 */
export const ELFO_PROTOCOL_SIGNER = new PublicKey('82TaHfkjMvEftkuPEVfGh58zy5D2zxEKX8kos2Ry1GKw');

/**
 *  Elfo protocol state account
 */
export const ELFO_PROTOCOL_STATE = new PublicKey('784JzJn2j6U6e6p2SqvoHDj55bHJa1uaNtVYDuVrGsMw');

export const DEFAULT_USDC_MINT = new PublicKey('DaCWEs6Aofd2Re2WQnZUATRMr2NJv5YRxwo94dH7GYWj');
