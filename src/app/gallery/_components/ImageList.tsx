'use client';

import { useInfiniteImagesGallery } from '@/hooks/query/useGallery';
import { Box, Grid2 as Grid } from '@mui/material';
import { useEffect } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import ImageItemComponent from './ImageItem';

const ImageList = () => {
  const { data, fetchNextPage } = useInfiniteImagesGallery();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.9,
  });

  useEffect(() => {
    if (isIntersecting) {
      if (isIntersecting) fetchNextPage();
    }
  }, [isIntersecting, fetchNextPage]);

  const renderListItem = data?.pages?.length
    ? data.pages.map((item, i) => (
        <Grid key={i} container spacing={3} size={1}>
          {item.map((i) => (
            <ImageItemComponent key={i.id} image={i} />
          ))}
        </Grid>
      ))
    : null;

  return (
    <>
      <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={3} px={3}>
        {renderListItem}
      </Grid>
      <Box ref={ref} height={200}></Box>
    </>
  );
};

export default ImageList;
