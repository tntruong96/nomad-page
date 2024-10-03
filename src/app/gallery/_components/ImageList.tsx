'use client';

import { useImagesGallery } from '@/hooks/query/useGallery';
import { Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import ImageItemComponent from './ImageItem';

const ImageList = () => {
  const { data } = useImagesGallery();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.9,
  });

  useEffect(() => {
    if (isIntersecting) {
      console.log(isIntersecting);
    }
  }, [isIntersecting]);
  //   console.log(data);

  const renderListItem = data?.length
    ? data.map((item) => <ImageItemComponent key={item.id} image={item} />)
    : null;

  // if (isLoading) return <Box>Loading</Box>;

  return (
    <>
      <GridLayout>
        <GridColumnItem sx={{ gridColumn: '1/2' }}>
          {renderListItem}
        </GridColumnItem>
        {/* <GridColumnItem sx={{ gridColumn: '2/3' }}>
        {renderListItem}
        </GridColumnItem>
        <GridColumnItem sx={{ gridColumn: '3/4' }}>
        {renderListItem}
        </GridColumnItem> */}
      </GridLayout>
      <Box ref={ref} height={400}></Box>
    </>
  );
};

export default ImageList;

const GridLayout = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
});

const GridColumnItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});
