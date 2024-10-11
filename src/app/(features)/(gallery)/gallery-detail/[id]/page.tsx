import GalleryDetail from '@/components/GalleryDetailPage/DetailGallery';
import { getImage } from '@/services/gallery.service';
import { getBase64Blur } from '@/services/placeholder.service';

const GalleryDetailPage = async ({ params }: { params: { id: string } }) => {
  const imageData = await getImage(params.id);
  // console.log(data);

  return <GalleryDetail imageData={imageData} />;
};

export default GalleryDetailPage;
