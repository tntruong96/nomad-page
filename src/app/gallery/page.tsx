import { gallery } from '@/assests/query-keys-factory';
import { getImages } from '@/services/gallery.service';
import { QueryClient } from '@tanstack/react-query';
import ImageList from './_components/ImageList';

const GalleryPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [gallery.lists()],
    queryFn: ({ pageParam: page }) => getImages({ page, limit: 12 }),
    initialPageParam: 1,
  });

  // const data = await getGalleryImage();

  // const renderListItem = data?.length
  //   ? data.map((item, i) => (
  //       <Grid2 container spacing={3} size={1}>
  //         {item.map((i) => (
  //           <ImageItemComponent key={i.id} image={i} />
  //         ))}
  //       </Grid2>
  //     ))
  //   : null;

  return <ImageList />;
};

export default GalleryPage;
