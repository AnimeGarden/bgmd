type SubjectRating = {
  score: number;
  rank: number;
};

type SubjectImage = {
  provider: 'bgm' | 'tmdb';
  quality: string;
  src: string;
};

type SubjectSearch = {
  include: string[];

  exclude?: string[] | null | undefined;
};

type BasicSubject = {
  id: number;

  title: string;

  platform: string;

  onair_date?: string | null | undefined;

  rating: SubjectRating;

  poster: string;

  tags: string;

  search: SubjectSearch;
};

type FullSubject = BasicSubject & {
  summary: string;

  alias: string[];

  images: SubjectImage[];
};

declare const _default: {
  subjects: BasicSubject[];
};

export {
  SubjectRating,
  SubjectImage,
  SubjectSearch,
  BasicSubject,
  FullSubject,
  _default as default
};
