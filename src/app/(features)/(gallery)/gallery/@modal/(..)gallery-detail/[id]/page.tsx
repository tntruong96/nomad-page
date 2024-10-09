// 'use client';

import getQueryClient from '@/assests/getQueryClient';
import { gallery } from '@/assests/query-keys-factory';
import { getImage } from '@/services/gallery.service';
import GalleryDialog from '../../_components/GalleryDialog';

const GalleryDetailModal = ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: [gallery.detail(params.id)],
    queryFn: () => getImage(params.id),
  });

  return <GalleryDialog id={params.id} />;
};

export default GalleryDetailModal;
