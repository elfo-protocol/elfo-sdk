import * as anchor from '@project-serum/anchor';
import { Program, Provider } from '@project-serum/anchor';
import { SubrinaProtocol } from './types/subrina_protocol';
import { idl } from './types/subrina_protocol_idl';
import { PublicKey } from '@solana/web3.js';
const utf8 = anchor.utils.bytes.utf8;

export const DEFAULT_PROGRAM_ID = new PublicKey('FWrg3R4FVkLDaxcA6uYsGhV4hDpKWxu7AgoFUuWGKYUP');
export const DEFAULT_USDC_MINT = new PublicKey('FWrg3R4FVkLDaxcA6uYsGhV4hDpKWxu7AgoFUuWGKYUP');

let _program: Program<SubrinaProtocol> | undefined = undefined;
let _protocolSigner: PublicKey | undefined;
let _protocolState: PublicKey | undefined;

export const getProgram = (provider: Provider): Program<SubrinaProtocol> => {
  if (_program) return _program;
  _program = new Program<SubrinaProtocol>(idl as SubrinaProtocol, DEFAULT_PROGRAM_ID, provider);
  return _program;
};

export const getProtocolSigner = async () => {
  if (_protocolSigner) return _protocolSigner;
  [_protocolSigner] = await PublicKey.findProgramAddress([utf8.encode('protocol_signer')], DEFAULT_PROGRAM_ID);

  return _protocolSigner;
};

export const getProcolState = async () => {
  if (_protocolState) return _protocolState;

  [_protocolState] = await PublicKey.findProgramAddress([utf8.encode('protocol_state')], DEFAULT_PROGRAM_ID);

  return _protocolState;
};
