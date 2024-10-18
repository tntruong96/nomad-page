import { gallery } from '@/assests/query-keys-factory';
import { getImages } from '@/services/gallery.service';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ImageList from './_components/ImageList';

const GalleryPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [gallery.lists()],
    queryFn: ({ pageParam: page }) => getImages({ page, limit: 12 }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImageList />;
    </HydrationBoundary>
  );
};

export default GalleryPage;
