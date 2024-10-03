import { TPaginationParams } from '@/types/common.type';
import { TImage } from '@/types/gallery.type';
import axios from 'axios';

const getImages = async (params: TPaginationParams): Promise<TImage[]> => {
  const { page, limit } = params;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_UNSPLASH_LINK}/photos?page=${page}&per_page=${limit}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  );

  return data;
};

export { getImages };
