import { Program, Provider } from '@project-serum/anchor';
import { ElfoProtocol } from './types/elfo_protocol';
import { idl } from './types/elfo_protocol_idl';
import { DEFAULT_PROGRAM_ID } from './constants';

let _program: Program<ElfoProtocol> | undefined = undefined;

export const getProgram = (provider: Provider): Program<ElfoProtocol> => {
  if (_program) return _program;
  _program = new Program<ElfoProtocol>(idl as ElfoProtocol, DEFAULT_PROGRAM_ID, provider);
  return _program;
};
