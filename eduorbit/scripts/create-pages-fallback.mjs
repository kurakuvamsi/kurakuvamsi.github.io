import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const browserOutput = process.argv[2] ?? 'dist/eduorbit-v7/browser';
await copyFile(join(browserOutput, 'index.html'), join(browserOutput, '404.html'));
