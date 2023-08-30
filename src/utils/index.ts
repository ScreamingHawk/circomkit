import type {CircomkitConfig} from '../types/circomkit';

/** A mapping from prime (decimals) to prime name. */
export const primeToName: {[key: `${number}`]: CircomkitConfig['prime']} = {
  '21888242871839275222246405745257275088548364400416034343698204186575808495617': 'bn128',
  '52435875175126190479447740508185965837690552500527637822603658699938581184513': 'bls12381',
  '18446744069414584321': 'goldilocks',
} as const;

/** JSON Stringify with a prettier format. */
export function prettyStringify(obj: unknown): string {
  return JSON.stringify(obj, undefined, 2);
}

export const usageString = `Usage:

  Compile the circuit.
  > compile circuit

  Create main component.
  > instantiate circuit
  
  Print circuit information.
  > info circuit

  Clean build artifacts & main component.
  > clean circuit

  Export Solidity verifier.
  > contract circuit
  
  Export calldata for a verifier contract.
  > calldata circuit input

  Export JSON for a chosen file.
  > json r1cs circuit
  > json zkey circuit
  > json wtns circuit input

  Commence circuit-specific setup.
  > setup circuit
  > setup circuit ptau-path
  
  Download the PTAU file needed for the circuit.
  > ptau circuit

  Generate a proof.
  > prove circuit input 

  Verify a proof.
  > verify circuit input

  Generate a witness.
  > witness circuit input
  
  Initialize a Circomkit project.
  > init                # initializes in "circomkit-project" folder
  > init project-name   # initializes in <project-name> folder

  Print configurations to console.
  > config
`;
