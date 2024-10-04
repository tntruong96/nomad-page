import { getBase64Blur } from '@/services/gallery.service';
import { TImage } from '@/types/gallery.type';
import { styled } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect } from 'react';

interface IProps {
  image: TImage;
}

const ImageItemComponent: FC<IProps> = ({ image }) => {
  useEffect(() => {
    // getBase64Blur(image.urls.regular);
  }, [image]);
  return (
    <ImageItem
      width={image.width}
      height={image.height}
      src={image.urls.regular}
      alt={image.slug}
    />
  );
};

export default ImageItemComponent;

const ImageItem = styled(Image)({
  objectFit: 'cover',
});
