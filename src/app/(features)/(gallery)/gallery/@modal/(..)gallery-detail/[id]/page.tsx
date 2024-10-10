'use client';

import { Box } from '@mui/material';
import GalleryDialog from '../../_components/GalleryDialog';

const GalleryDetailModal = () => {
  return (
    <GalleryDialog>
      <Box component={'div'} className="h-[500px] w-full">
        {/* <Image
          {...img}
          alt={data.slug}
          blurDataURL={base64}
          placeholder="blur"
          objectFit="contain"
        /> */}
      </Box>
    </GalleryDialog>
  );
};

export default GalleryDetailModal;
