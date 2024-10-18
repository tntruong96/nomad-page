'use client';
import { Box, Paper, useMediaQuery, useTheme, Zoom } from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';

interface IProps extends PropsWithChildren {
  zoomContent?: ReactNode;
}

interface IZoomContext {
  onZoom: () => void;
  setZoomContent: (content: ReactNode) => void;
}

export const ZoomContext = createContext<IZoomContext>({
  onZoom: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setZoomContent(content) {},
});

const ZoomContextProvider: FC<IProps> = ({ children }) => {
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomContent, setZoomContent] = useState<ReactNode>();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function onZoom() {
    if (!fullScreen) {
      setZoomIn(true);
    }
  }

  function setContent(zoomContent: ReactNode) {
    setZoomContent(zoomContent);
  }

  return (
    <>
      <ZoomContext.Provider value={{ onZoom, setZoomContent: setContent }}>
        {children}
      </ZoomContext.Provider>
      <Zoom in={zoomIn} appear={false}>
        <Paper
          sx={{
            width: '100%',
            height: '-webkit-fill-available',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10000,
          }}
        >
          <Box
            component={'div'}
            sx={{
              width: '100%',
              height: '100%',
            }}
            onClick={() => setZoomIn((prev) => !prev)}
          >
            {zoomContent}
          </Box>
        </Paper>
      </Zoom>
    </>
  );
};

export default ZoomContextProvider;
