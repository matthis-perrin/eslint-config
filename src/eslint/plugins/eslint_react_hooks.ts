import {EslintMetadata} from '@src/eslint/models';

export const eslintReactHooks: EslintMetadata = {
  plugin: {
    name: 'react-hooks',
    importName: 'reactHooks',
    module: 'eslint-plugin-react-hooks',
    requireFixup: true,
  },
  dependencies: {
    'eslint-plugin-react-hooks': '4.6.x',
  },
  settings: {},
  allOff: {
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
  onlyOn: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
  },
};
