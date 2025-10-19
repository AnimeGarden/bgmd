#!/usr/bin/env node

import fs from 'fs-extra';
import { execa } from 'execa';

const $ = execa({ stdio: 'inherit' });

const { version } = await fs.readJson('package.json');

const [major, minor, patch] = version.split('.') as string[];

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1);
const day = String(today.getDate());

const nextMinor = `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`;
const nextPatch = minor === nextMinor ? +patch + 1 : 0;
const nextVersion = `${major}.${nextMinor}.${nextPatch}`;

console.log('Release next version:', nextVersion);

await fs.writeFile(
  'package.json',
  (
    await fs.readFile('package.json', 'utf-8')
  ).replace(`"version": "${version}"`, `"version": "${nextVersion}"`),
  'utf-8'
);

console.log('Run: pnpm build');
await $`pnpm build`;

console.log('Commit changes');
await $`git add package.json data/`;
await $`git commit -m ${`chore: release ${nextVersion}`}`;
await $`git tag ${'v' + nextVersion}`;
await $`git push`;

console.log('Release to npm');
await $`pnpm publish --access public`;
