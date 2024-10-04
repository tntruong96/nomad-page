'use client';

import { gallery } from '@/assests/query-keys-factory';
import { getImages } from '@/services/gallery.service';
import { TImage } from '@/types/gallery.type';
import { useInfiniteQuery } from '@tanstack/react-query';

const useInfiniteImagesGallery = () => {
  const query = useInfiniteQuery({
    queryKey: [gallery.lists()],
    queryFn: ({ pageParam: page }) => getImages({ page, limit: 12 }),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    gcTime: 0,
    select(data) {
      const reducedData = data.pages.reduce<TImage[]>((prev, cur) => {
        prev.push(...cur);
        return prev;
      }, []);
      let end = reducedData.length / 3;
      let start = 0;
      let c = 1;
      const newData: TImage[][] = [];
      while (end <= reducedData.length) {
        newData.push(reducedData.slice(start, end));
        c += 1;
        start = end;
        end = (reducedData.length / 3) * c;
      }
      return { ...data, pages: newData };
    },
  });
  return { ...query };
};

export { useInfiniteImagesGallery };
