'use server';

import getQueryClient from '@/assests/getQueryClient';
import { gallery } from '@/assests/query-keys-factory';
import { getImage } from '@/services/gallery.service';
import { dehydrate } from '@tanstack/react-query';

const queryClient = getQueryClient();

async function prefetchImageDetail(id: string) {
  await queryClient.prefetchQuery({
    queryKey: gallery.detail(id),
    queryFn: () => getImage(id),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export { prefetchImageDetail };
