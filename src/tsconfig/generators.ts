import {join} from 'node:path';

import {cleanDir, writeJsonFile} from '@src/fs';
import {RuntimeType} from '@src/models';
import {PACKAGE_VERSIONS, TYPESCRIPT_VERSION} from '@src/versions';

export async function generateForType(path: string, type: RuntimeType): Promise<void> {
  await cleanDir(path);
  await Promise.all([
    writeJsonFile(join(path, 'package.json'), generatePackageJson(type)),
    writeJsonFile(join(path, 'tsconfig.json'), generateTsConfig(type)),
  ]);
}

function generateTsConfig(type: RuntimeType): Record<string, unknown> {
  const baseCompilerOptions = {
    allowSyntheticDefaultImports: true,
    baseUrl: '.',
    downlevelIteration: true,
    esModuleInterop: true,
    incremental: true,
    // Perform additional checks to ensure that separate compilation (such as with
    // transpileModule or @babel/plugin-transform-typescript) would be safe.
    isolatedModules: false,
    locale: 'en-us',
    newLine: 'LF',
    noErrorTruncation: true,
    noFallthroughCasesInSwitch: true,
    noEmit: true,
    noImplicitReturns: true,
    noUncheckedIndexedAccess: true,
    pretty: true,
    // Skip type checking of all declaration files (*.d.ts).
    skipLibCheck: true,
    strict: true,
    tsBuildInfoFile: 'tmp/.tsbuildinfo',
    // Prevent all visible ”@types” packages to be included by default
    types: [],
  };

  let additionalCompilerOptions:
    | (Record<string, boolean | string | string[] | Record<string, string[]>> & {
        module: string;
        moduleResolution: string;
        lib: string[];
        target: string;
        paths: Record<string, string[]>;
      })
    | undefined;

  const makePaths = (projects: string[]): Record<string, string[]> =>
    Object.fromEntries([
      ['@src/*', ['./src/*']],
      [
        '*',
        [
          './node_modules/*',
          './node_modules/@types/*',
          ...projects.flatMap(p => [`../${p}/node_modules/*`, `../${p}/node_modules/@types/*`]),
        ],
      ],
      ...projects.flatMap(name => [[`${name}/*`, [`../${name}/src/*`]]]),
    ]);

  if (type === RuntimeType.Lib) {
    additionalCompilerOptions = {
      module: 'none',
      moduleResolution: 'node',
      lib: ['es2022'],
      target: 'es2022',
      paths: makePaths(['shared']),
    };
  } else if (type === RuntimeType.Web) {
    additionalCompilerOptions = {
      module: 'esnext',
      moduleResolution: 'node',
      lib: ['es2022', 'dom', 'dom.iterable'],
      target: 'esnext',
      paths: makePaths(['shared', 'shared-web']),
      //
      jsx: 'react',
    };
  } else if (type === RuntimeType.Node) {
    additionalCompilerOptions = {
      module: 'commonjs',
      moduleResolution: 'node',
      lib: ['es2022'],
      target: 'es2022',
      paths: makePaths(['shared', 'shared-node']),
      //
      types: ['node'],
    };
  } else if (type === RuntimeType.ReactNative) {
    additionalCompilerOptions = {
      module: 'esnext',
      moduleResolution: 'node',
      lib: ['es2022'],
      target: 'esnext',
      paths: makePaths(['shared', 'shared-web']),
      //
      jsx: 'react-native',
    };
  } else {
    throw new Error(`Unknown project type ${type}`);
  }

  return {compilerOptions: {...baseCompilerOptions, ...additionalCompilerOptions}};
}

function generatePackageJson(type: RuntimeType): Record<string, unknown> {
  return {
    name: `@matthis/tsconfig-${type}`,
    version: PACKAGE_VERSIONS.tsconfig,
    license: 'UNLICENSED',
    type: 'module',
    main: 'tsconfig.json',
    dependencies: {
      typescript: TYPESCRIPT_VERSION,
    },
  };
}
