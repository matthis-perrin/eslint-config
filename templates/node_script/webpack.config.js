import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {config} from '@matthis/webpack-node-script';

export const getConfig = config;
export default getConfig(dirname(fileURLToPath(import.meta.url)));
