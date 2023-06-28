import type {LogLevelNames} from 'loglevel';
import type {CircomkitConfig} from '../types/circomkit';

/** Default configurations */
export const defaultConfig: Readonly<CircomkitConfig> = Object.seal({
  // general settings
  protocol: 'groth16',
  curve: 'bn128',
  version: '2.1.0',
  // directories & paths
  circuits: './circuits.json',
  dirPtau: './ptau',
  dirCircuits: './circuits',
  dirInputs: './inputs',
  dirBuild: './build',
  // compiler-specific
  optimization: 0,
  include: ['./node_modules'],
  // groth16 phase-2 settings
  groth16numContributions: 1,
  groth16askForEntropy: false,
  // logger
  logLevel: 'INFO',
  verbose: true,
});

/** Colors used by the logger. */
export const colors: {[key in LogLevelNames | 'title' | 'success']: string} = {
  title: '\u001b[0;34m', // blue
  success: '\u001b[0;32m', // green
  info: '\u001b[2;37m', // gray
  trace: '\u001b[2;37m', // gray
  debug: '\u001b[2;37m', // gray
  error: '\u001b[0;31m', // red
  warn: '\u001b[0;33m', // yellow
};
