#!/usr/bin/env node

import fs from 'fs-extra';
import { execa } from 'execa';

const $ = execa({ stdio: 'inherit' });

await fs.rm('dist', { force: true, recursive: true });
await fs.ensureDir('dist');

await $`bgmx calendar --out data/calendar.json`;
await fs.copy('data/calendar.json', 'dist/calendar.json');

await $`bgmx sync subject --out-dir data/subject`;
