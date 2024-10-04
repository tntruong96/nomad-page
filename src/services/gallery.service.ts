import { TPaginationParams } from '@/types/common.type';
import { TImage } from '@/types/gallery.type';
import axios from 'axios';
import { getPlaiceholder } from 'plaiceholder';

const getImages = async (params: TPaginationParams): Promise<TImage[]> => {
  const { page, limit } = params;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_UNSPLASH_LINK}/photos?page=${page}&per_page=${limit}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  );

  return data;
};

const getBase64Blur = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);
  console.log(base64);
};

export { getImages, getBase64Blur };
