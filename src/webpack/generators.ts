import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

import {cleanDir, readFile, writeRawFile} from '@src/fs';
import {WebpackType} from '@src/models';
import {compile} from '@src/packager';
import {PACKAGE_VERSIONS} from '@src/versions';

export async function generateForType(path: string, type: WebpackType): Promise<void> {
  await cleanDir(path);
  await compileWebpackConfig(type, path);
}

const webpackConfigFiles: Record<WebpackType, string> = {
  [WebpackType.Lambda]: 'src/webpack/configs/lambda.ts',
  [WebpackType.Lib]: 'src/webpack/configs/lib.ts',
  [WebpackType.NodeScript]: 'src/webpack/configs/node_script.ts',
  [WebpackType.Web]: 'src/webpack/configs/web.ts',
};

async function compileWebpackConfig(type: WebpackType, path: string): Promise<void> {
  const entry = join(fileURLToPath(import.meta.url), `../../${webpackConfigFiles[type]}`);
  const dst = join(path);
  await compile(entry, dst, true, {
    name: `@matthis/webpack-${type}`,
    version: PACKAGE_VERSIONS.webpack,
  });
  if (type === WebpackType.Lambda) {
    const packageJsonPath = join(
      fileURLToPath(import.meta.url),
      `../../packages/webpack-lambda/package.json`
    );
    const packageJsonContent = await readFile(packageJsonPath);
    const packageJson = JSON.parse(packageJsonContent);
    packageJson.dependencies['@matthis/lambda-server-runtime'] =
      PACKAGE_VERSIONS.lambdaServerRuntime;
    await writeRawFile(packageJsonPath, JSON.stringify(packageJson, undefined, 2));
  }
}
