'use client';

import { gallery } from '@/assests/query-keys-factory';
import { getImage, getImages } from '@/services/gallery.service';
import { TImage } from '@/types/gallery.type';
import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useInfiniteImagesGallery = () => {
  const [countCol, setCountCol] = useState<number>(3);
  const query = useSuspenseInfiniteQuery({
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
      let end = reducedData.length / countCol;
      let start = 0;
      let c = 1;
      const newData: TImage[][] = [];
      while (end <= reducedData.length) {
        newData.push(reducedData.slice(start, end));
        c += 1;
        start = end;
        end = (reducedData.length / countCol) * c;
      }
      return { ...data, pages: newData };
    },
  });
  return { ...query, setCountCol };
};

const useGetImageDetail = (id: string) => {
  const query = useQuery({
    queryKey: [gallery.detail(id)],
    queryFn: () => getImage(id),
    enabled: !!id,
  });
  return { ...query };
};

export { useInfiniteImagesGallery, useGetImageDetail };
