import { TImage } from './gallery.type';

type TPaginationParams = {
  page: number;
  limit: number;
};

type TResponseUnsplashCustom = {
  data: TImage[];
  nextPage: number;
};

export { type TPaginationParams, type TResponseUnsplashCustom };
