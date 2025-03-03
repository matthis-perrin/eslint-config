import {EslintMetadata} from '@src/eslint/models';
import {PRETTIER_VERSION} from '@src/versions';

export const eslintPrettier: EslintMetadata = {
  plugin: {name: 'prettier', importName: 'prettier', module: 'eslint-plugin-prettier'},
  dependencies: {
    'eslint-plugin-prettier': '5.2.x',
    prettier: PRETTIER_VERSION,
  },
  settings: {},
  allOff: {
    'prettier/prettier': 'off',
  },
  onlyOn: {
    'prettier/prettier': 'warn',
  },
};
