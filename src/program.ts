import * as anchor from '@project-serum/anchor';
import { Program, Provider } from '@project-serum/anchor';
import { ElfoProtocol } from './types/elfo_protocol';
import { idl } from './types/elfo_protocol_idl';
import { PublicKey } from '@solana/web3.js';
import { DEFAULT_PROGRAM_ID } from './constants';
const utf8 = anchor.utils.bytes.utf8;

let _program: Program<ElfoProtocol> | undefined = undefined;
let _protocolSigner: PublicKey | undefined;
let _protocolState: PublicKey | undefined;

export const getProgram = (provider: Provider): Program<ElfoProtocol> => {
  if (_program) return _program;
  _program = new Program<ElfoProtocol>(idl as ElfoProtocol, DEFAULT_PROGRAM_ID, provider);
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
