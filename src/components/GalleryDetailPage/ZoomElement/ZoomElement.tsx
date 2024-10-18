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
  }, []);

  return (
    <Box component={'div'} className="m-auto flex w-full justify-center">
      <Box component={'div'} onClick={() => onZoom()}>
        {children}
      </Box>
    </Box>
  );
};

export default ZoomElement;
