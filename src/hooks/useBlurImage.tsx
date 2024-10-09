import { decode, isBlurhashValid } from 'blurhash';
import { useEffect, useState } from 'react';

const useBlurImage = (blur_hash: string) => {
  const [blurUrl, setBlurUrl] = useState('');
  const [showBlur, setShowBlur] = useState(false);
  useEffect(() => {
    const validRes = isBlurhashValid(blur_hash);
    if (validRes.result) {
      const pixels = decode(blur_hash, 300, 150);
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
  }, [blur_hash]);

  useEffect(() => {
    if (blurUrl) {
      setShowBlur(true);
    }
  }, [blurUrl]);
  return { blurUrl, showBlur, setShowBlur };
};

export default useBlurImage;
