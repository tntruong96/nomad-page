// 'use server';
import { TPaginationParams } from '@/types/common.type';
import { TImage } from '@/types/gallery.type';
import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_UNSPLASH_LINK}`,
  params: {
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  },
});

const getImages = async (params: TPaginationParams): Promise<TImage[]> => {
  const { page, limit } = params;
  const { data } = await instance.get(`/photos?page=${page}&per_page=${limit}`);

  return data;
};

const getImage = async (id: string): Promise<TImage> => {
  const { data } = await instance.get(`/photos/${id}`);
  return data;
};

export { getImage, getImages };
