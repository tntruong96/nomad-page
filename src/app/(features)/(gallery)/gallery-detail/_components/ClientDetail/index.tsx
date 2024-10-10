// 'use client';
// import { useGetImageDetail } from '@/hooks/query/useGallery';
import { Box } from '@mui/material';

const ClientDetailGallery = async () => {
  // const { id } = useParams();

  // const data = await getImage(params.id);
  // const { base64, img } = await getBase64Blur(data.urls.regular);
  // console.log(data);
  // const { data } = useGetImageDetail(id);

  return (
    <Box component={'div'} className="h-[500px] w-full">
      {/* <Image
        {...img}
        alt={data.slug}
        blurDataURL={base64}
        placeholder="blur"
        objectFit="contain"
      /> */}
    </Box>
  );
};

export default ClientDetailGallery;
