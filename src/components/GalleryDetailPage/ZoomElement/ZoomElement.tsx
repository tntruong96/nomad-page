'use client';
import CustomImage from '@/components/ImageComponent';
import { ZoomContext } from '@/hooks/useZoomContext';
import { TImage } from '@/types/gallery.type';
import { Box } from '@mui/material';
import { FC, PropsWithChildren, useContext, useEffect } from 'react';
interface IProps extends PropsWithChildren {
  zoomContent: TImage;
}

const ZoomElement: FC<IProps> = ({ children, zoomContent }) => {
  const { onZoom, setZoomContent } = useContext(ZoomContext);

  useEffect(() => {
    setZoomContent(<CustomImage image={zoomContent} />);
  }, [zoomContent]);

  return (
    <Box
      component={'div'}
      className="flex justify-center sm:h-[580px]"
      onClick={() => onZoom()}
    >
      {children}
    </Box>
  );
};

export default ZoomElement;
