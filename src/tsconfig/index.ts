import {join, resolve} from 'path';

import {RuntimeType} from '../models';
import {generateForType} from './generators';

export async function tsconfigPackages(types: RuntimeType[]): Promise<void> {
  await Promise.all(
    types.map(async type =>
      generateForType(join(resolve('.'), 'packages', `tsconfig-${type}`), type)
    )
  );
}
