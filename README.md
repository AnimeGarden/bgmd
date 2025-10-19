# bgmd

[![version](https://img.shields.io/npm/v/bgmd?label=bgmd)](https://www.npmjs.com/package/bgmd)
[![CI](https://github.com/AnimeGarden/bgmd/actions/workflows/sync.yml/badge.svg)](https://github.com/AnimeGarden/bgmd/actions/workflows/sync.yml)

Bangumi data.

## Installation

```bash
npm i bgmd
```

You can just use the following cdn to get the latest data.

- `https://unpkg.com/bgmd@0/dist/index.json`
- `https://unpkg.com/bgmd@0/dist/calendar.json`
- `https://unpkg.com/bgmd@0/dist/full.json`

<!-- Or you can just use the following APIs in `bgmc/data` to fetch the latest data from cdn.

```ts
import { getCalendar } from 'bgmc/data';

const calendar = await getCalendar();
console.log(calendar);
``` -->

## Usage

```ts
import data from 'bgmd'
import full from 'bgmd/full'
import calendar from 'bgmd/calendar'

// data.subjects
// full.subjects
// calendar.calendar
// calendar.web
```

## License

MIT License © 2023 [XLor](https://github.com/yjl9903)
