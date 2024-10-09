import CustomImage from '@/components/ImageComponent';
import { TImage } from '@/types/gallery.type';
import { FC } from 'react';

interface IProps {
  image: TImage;
}

const ImageItemComponent: FC<IProps> = ({ image }) => {
  return <CustomImage image={image} />;
};

export default ImageItemComponent;
