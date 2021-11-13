import {join} from 'path';
import {baseConfig} from './common/base';
import {babelLoaderNode, sourceMapLoader} from './common/loaders';
import {definePlugin, forkTsCheckerPlugin, cleanTerminalPlugin} from './common/plugins';
import {getProjectDir, WebpackConfigFragment} from './common/utils';

export function nodeConfig(): WebpackConfigFragment {
  const base = baseConfig({hashOutput: false});
  const define = definePlugin();
  const forkTsChecker = forkTsCheckerPlugin();
  const cleanTerminal = cleanTerminalPlugin();
  const babel = babelLoaderNode();
  const sourceMap = sourceMapLoader();

  return {
    dependencies: {
      ...base.dependencies,
      ...define.dependencies,
      ...forkTsChecker.dependencies,
      ...cleanTerminal.dependencies,
      ...babel.dependencies,
      ...sourceMap.dependencies,
    },
    config: () => ({
      ...base.config(),
      target: 'node',
      entry: {
        main: join(getProjectDir(), `src/index.ts`),
      },
      module: {
        rules: [babel.config(), sourceMap.config()],
      },
      plugins: [define.config(), forkTsChecker.config(), cleanTerminal.config()],
    }),
  };
}
