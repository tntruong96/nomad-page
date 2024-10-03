export enum EQUERY_KEY {
  GALLERY = 'gallery',
}

export const gallery = {
  all: [EQUERY_KEY.GALLERY] as const,
  lists: () => [...gallery.all, 'list'] as const,
  list: (filters: string) => [...gallery.lists(), { filters }] as const,
  details: () => [...gallery.all, 'detail'] as const,
  detail: (id: number) => [...gallery.details(), id] as const,
};
