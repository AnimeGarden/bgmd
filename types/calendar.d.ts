import type { BasicSubject } from './index.d.ts';

export type * from './index.d.ts';

declare type CalendarData = {
  calendar: [
    BasicSubject[],
    BasicSubject[],
    BasicSubject[],
    BasicSubject[],
    BasicSubject[],
    BasicSubject[],
    BasicSubject[]
  ];
  web: BasicSubject[];
};

export default CalendarData;
