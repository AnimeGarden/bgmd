#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'node:path';
import { execa } from 'execa';

import type { FullSubject } from '../types';

const $ = execa({ stdio: 'inherit' });

await fs.rm('dist', { force: true, recursive: true });
await fs.ensureDir('dist');

console.log('bgmx calendar');
await $`bgmx calendar --out data/calendar.json`;
await fs.copy('data/calendar.json', 'dist/calendar.json');

console.log();
console.log('bgmx sync subject');
await $`bgmx sync subject --out-dir data/subject`;

const dataRoot = 'data/subject';

const files = [];
for (const file of await fs.readdir(dataRoot)) {
  if (file.endsWith('.json')) {
    files.push(path.join(dataRoot, file));
  } else {
    for (const subFile of await fs.readdir(path.join(dataRoot, file))) {
      if (subFile.endsWith('.json')) {
        files.push(path.join(dataRoot, file, subFile));
      }
    }
  }
}

const full: FullSubject[] = [];
for (const file of files) {
  const data = (await fs.readJson(file)) as FullSubject[];
  full.push(...data);
}
full.sort((a, b) => a.id - b.id);

await fs.writeJSON(
  'dist/index.json',
  full.map(item => ({
    id: item.id,
    title: item.title,
    platform: item.platform,
    onair_date: item.onair_date,
    rating: item.rating,
    poster: item.poster,
    tags: item.tags,
    search: item.search,
  }))
);

await fs.writeJSON('dist/full.json', full);
