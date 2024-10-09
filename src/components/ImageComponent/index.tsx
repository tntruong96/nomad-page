import useBlurImage from '@/hooks/useBlurImage';
import { TImage } from '@/types/gallery.type';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import React, { FC, useState } from 'react';

interface IProps {
  image: TImage;
}
const CustomImage: FC<IProps> = ({ image }) => {
  const { blurUrl, showBlur, setShowBlur } = useBlurImage(image.blur_hash);
  const [completelyLoad, setCompletelyLoad] = useState(false);
  return (
    <Box className={'relative'}>
      <ImageItem
        width={image.width}
        height={image.height}
        src={image.urls.regular}
        alt={image.slug}
        priority
        onLoad={() => {
          setCompletelyLoad(true);
          setShowBlur(false);
        }}
        completelyLoad={completelyLoad}
      />
      <Box
        component={'img'}
        src={blurUrl}
        alt={image.slug}
        className="absolute top-0"
        sx={{
          width: '-webkit-fill-available',
          height: '-webkit-fill-available',
          objectFit: 'fill',
          display: showBlur ? 'block' : 'none',
        }}
      />
    </Box>
  );
};

export default CustomImage;

const ImageItem = styled(Image, {
  shouldForwardProp(propName) {
    return propName !== 'completelyLoad';
  },
})<{ completelyLoad: boolean }>(({ completelyLoad }) => ({
  opacity: !completelyLoad ? 0 : 1,
}));
