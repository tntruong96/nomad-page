import DetailGallery from '@/components/GalleryDetailPage/DetailGallery';
import { getImage } from '@/services/gallery.service';
import GalleryDialog from '../../_components/GalleryDialog';

const GalleryDetailModal = async ({ params }: { params: { id: string } }) => {
  // const imageData = useGetImageDetail(params.id);
  // const queryClient = getQueryClient();
  // const imageData = await queryClient.getQueryData<TImage>(
  //   gallery.detail(params.id),
  // );
  const imageData = await getImage(params.id);

  // console.log(imageData);

  return (
    <GalleryDialog>
      <DetailGallery imageData={imageData} />
    </GalleryDialog>
  );
};

export default GalleryDetailModal;
