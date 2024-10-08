import { getBase64Blur } from '@/services/placeholder.service';
import { TImage } from '@/types/gallery.type';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { decode, isBlurhashValid } from 'blurhash';

interface IProps {
  image: TImage;
}

const ImageItemComponent: FC<IProps> = ({ image }) => {
  const refImg = useRef<HTMLImageElement>(null);
  const [blurUrl, setBlurUrl] = useState('');
  const [showBlur, setShowBlur] = useState(false);
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    const validRes = isBlurhashValid(image.blur_hash);
    if (validRes.result) {
      const pixels = decode(image.blur_hash, 300, 150);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const imageData = ctx?.createImageData(300, 150);
      imageData?.data.set(pixels);
      imageData && ctx?.putImageData(imageData, 0, 0);
      const blurredImageUrl = canvas.toDataURL();
      if (blurredImageUrl) {
        setBlurUrl(blurredImageUrl);
      }
    }
  }, []);

  useEffect(() => {
    if (blurUrl) {
      setShowBlur(true);
    }
  }, [blurUrl]);

  return (
    <Box className={'relative'}>
      <ImageItem
        ref={refImg}
        width={image.width}
        height={image.height}
        src={image.urls.regular}
        alt={image.slug}
        priority
        onLoad={() => {
          setShowImg(true);
          setShowBlur(false);
        }}
        sx={{
          opacity: !showImg ? 0 : 1,
        }}
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

export default ImageItemComponent;

const ImageItem = styled(Image)({
  // objectFit: 'contain',
  // maxHeight: 'fit-content',
});
