// 'use client';
// import { useGetImageDetail } from '@/hooks/query/useGallery';
import DetailGallery from '@/components/GalleryDetailPage/DetailGallery';
import { getImage } from '@/services/gallery.service';
import { Box } from '@mui/material';

const ServerDetailGallery = async ({ params }: { params: { id: string } }) => {
  // const { id } = useParams();

  // const imageData = await getImage(params.id);
  // const { base64, img } = await getBase64Blur(data.urls.regular);
  // console.log(data);
  // const { data } = useGetImageDetail(id);

  return <Box component={'div'} className="h-[500px] w-full"></Box>;
};

export default ServerDetailGallery;
