'use client';

import { gallery } from '@/assests/query-keys-factory';
import { getImages } from '@/services/gallery.service';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useImagesGallery = () => {
  const [page, setPage] = useState(1);
  const query = useQuery({
    queryKey: [gallery.list, page],
    queryFn: () => getImages({ page, limit: 10 }),
    // select(data) {
    //   return [data];
    // },
  });
  return { ...query, setPage };
};

export { useImagesGallery };
