import * as anchor from '@project-serum/anchor/';
const PublicKey = anchor.web3.PublicKey;

/**
 * Program ID of ELFO protocol core program
 */
export const ELFO_PROTOCOL_PROGRAM_ID = new PublicKey('4T5P9n2Wy5f4KreDvXNKB5EBP6tSUe9YcPGJGXHbKJY5');

/**
 *  ELFO Protocol signer account
 */
export const ELFO_PROTOCOL_SIGNER = new PublicKey('566eQNanLXAhYzkWy7zdFehU4htceAcSYWxrBoh77PWj');

/**
 *  Elfo protocol state account
 */
export const ELFO_PROTOCOL_STATE = new PublicKey('7cGUt7fG6Zajki32xw3EhwWYBe9pRdAsjGQBupmeYyff');

export const DEFAULT_USDC_MINT = new PublicKey('3qzpQ72TdVWpUirUaDV1yvwb1nLHkuY22Z3X3u2VRZ43');
