import { Box } from '@mui/material';
import GalleryDialog from '../../_components/GalleryDialog';
import { getImage } from '@/services/gallery.service';
import DetailGallery from '@/components/GalleryDetailPage/DetailGallery';

const GalleryDetailModal = async ({ params }: { params: { id: string } }) => {
  const imageData = await getImage(params.id);

  return (
    <GalleryDialog>
      <DetailGallery imageData={imageData} />
    </GalleryDialog>
  );
};

export default GalleryDetailModal;
