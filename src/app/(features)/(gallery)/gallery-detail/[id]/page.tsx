import getQueryClient from '@/assests/getQueryClient';
import { gallery } from '@/assests/query-keys-factory';
import { getImage } from '@/services/gallery.service';
import { Box } from '@mui/material';
import React from 'react';
import ClientDetailGallery from '../_components/ClientDetail';

const GalleryDetailPage = ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: [gallery.detail(params.id)],
    queryFn: () => getImage(params.id),
  });
  return (
    <Box>
      <ClientDetailGallery />
    </Box>
  );
};

export default GalleryDetailPage;
