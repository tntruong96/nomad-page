'use client';

import { useInfiniteImagesGallery } from '@/hooks/query/useGallery';
import { Box, Grid2 as Grid } from '@mui/material';
import { FC, PropsWithChildren, useLayoutEffect } from 'react';
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts';
import ImageItemComponent from './ImageItem';
import CircleProgressComponent from '@/components/CircleProgress';

const ImageList: FC<PropsWithChildren> = ({ children }) => {
  const { data, fetchNextPage, setCountCol, isFetchingNextPage, isSuccess } =
    useInfiniteImagesGallery();
  const { width = 0 } = useWindowSize();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.9,
  });

  // console.log(data.pages[0][0]);

  useLayoutEffect(() => {
    if (isIntersecting) {
      if (isIntersecting) fetchNextPage();
    }
  }, [isIntersecting]);

  useLayoutEffect(() => {
    if (width >= 600 && width <= 900) {
      setCountCol(2);
    } else if (width > 900) {
      setCountCol(3);
    }
  }, [width]);

  const renderListItem = data?.pages?.length
    ? data.pages.map((item, i) => (
        <Grid
          key={i}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          size={1}
        >
          {item.map((i) => (
            <Box key={i.id} sx={{ maxHeight: 'fit-content' }}>
              <ImageItemComponent image={i} />
            </Box>
          ))}
        </Grid>
      ))
    : null;

  return (
    <>
      <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={3} px={3}>
        {renderListItem}
      </Grid>
      {isFetchingNextPage && <CircleProgressComponent sx={{ m: '24px 0px' }} />}
      <Box ref={ref} height={100}></Box>
    </>
  );
};

export default ImageList;
