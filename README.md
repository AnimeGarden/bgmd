# bgmd

[![version](https://img.shields.io/npm/v/bgmd?label=bgmd)](https://www.npmjs.com/package/bgmd)
[![CI](https://github.com/AnimeGarden/bgmd/actions/workflows/sync.yml/badge.svg)](https://github.com/AnimeGarden/bgmd/actions/workflows/sync.yml)

Bangumi data which is scraped from [Bangumi](https://bgm.tv/) and [TMDB](https://www.themoviedb.org/).

## Usage

```bash
npm i bgmd
```

It exports 3 bundled json file:

- `bgmd`: Basic information of all the scraped bangumi subject
- `bgmd/full`: Full information (with summary and more) of all the scraped bangumi subject
- `bgmd/calendar`: Basic information of the onair bangumis that was onairing at the time of package release

```ts
import basic from 'bgmd' with { type: 'json' };

import full from 'bgmd/full' with { type: 'json' };

import calendar from 'bgmd/calendar' with { type: 'json' };
```

If you don't want to download this large package, you can just use the following cdn to get the latest data.

- `bgmd`: `https://unpkg.com/bgmd@0/dist/index.json`
- `bgmd/full`: `https://unpkg.com/bgmd@0/dist/full.json`
- `bgmd/calendar`: `https://unpkg.com/bgmd@0/dist/calendar.json`

Or use the following helper functions in `bgmt/cdn` to fetch cdn.

```bash
npm i bgmt
```

```ts
import { fetchBasicSubjects, fetchFullSubjects, fetchCalendarSubjects } from 'bgmt/cdn'

// https://unpkg.com/bgmd@0/dist/index.json
await fetchBasicSubjects()

// https://unpkg.com/bgmd@0/dist/full.json
await fetchFullSubjects()

// https://unpkg.com/bgmd@0/dist/calendar.json
await fetchCalendarSubjects()
```

## License

MIT License © 2023 [XLor](https://github.com/yjl9903)
