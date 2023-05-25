import {join} from 'node:path';

import {Configuration} from 'webpack';

import {baseConfig} from '@src/webpack/configs/base_config';
import {babelLoaderWeb} from '@src/webpack/loaders/babel_loader_web';
import {sourceMapLoader} from '@src/webpack/loaders/source_map_loader';
import {htmlPlugin} from '@src/webpack/plugins/html_plugin';
import {webpackDevServer} from '@src/webpack/plugins/webpack_dev_server';

export function webConfig(opts: {context: string; watch: boolean}): Configuration {
  const {context, watch} = opts;
  const base = baseConfig({context, watch});
  return {
    ...base,
    target: 'web',
    entry: {main: join(context, 'src/index.tsx')},
    output: {
      path: join(context, 'dist'),
      filename: `[name].[contenthash].js`,
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [babelLoaderWeb(), sourceMapLoader()],
    },
    plugins: [...(base.plugins ?? []), htmlPlugin(context)],
    devServer: watch ? webpackDevServer(context) : undefined,
    optimization: {
      ...base.optimization,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[/\\]node_modules[/\\]/u,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
  };
}
