import type { BasicSubject } from './index.d.ts';

declare const _calendar: [
  BasicSubject[],
  BasicSubject[],
  BasicSubject[],
  BasicSubject[],
  BasicSubject[],
  BasicSubject[],
  BasicSubject[]
];

declare const _web: BasicSubject[];

declare const _default: {
  calendar: typeof _calendar;
  web: typeof _web;
};

export { _calendar as calendar, _web as web, _default as default };
