import GalleryDetail from '@/components/GalleryDetailPage/DetailGallery';
import { getImage } from '@/services/gallery.service';

const GalleryDetailPage = async ({ params }: { params: { id: string } }) => {
  const imageData = await getImage(params.id);

  return <GalleryDetail imageData={imageData} />;
};

export default GalleryDetailPage;
