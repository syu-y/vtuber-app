export const Paths = {
  home: '/',
  vtubers: '/vtuber-info/list',
  vtuber: '/vtuber-info/[pageId]',
} as const;

export type PathKeys = keyof typeof Paths;
export type Path = typeof Paths[PathKeys];
