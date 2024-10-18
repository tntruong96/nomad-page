'use client';

import CircleProgressComponent from '@/components/CircleProgress';
import { useInfiniteImagesGallery } from '@/hooks/query/useGallery';
import { Box, Grid2 as Grid } from '@mui/material';
import Link from 'next/link';
import { FC, PropsWithChildren, useLayoutEffect, useState } from 'react';
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts';
import ImageItemComponent from './ImageItem';
import { TImage } from '@/types/gallery.type';

const ImageList: FC<PropsWithChildren> = () => {
  const { data, fetchNextPage, setCountCol, isFetchingNextPage } =
    useInfiniteImagesGallery();
  const [dataImages, setDataImages] = useState<TImage[][]>([]);
  const { width = 0 } = useWindowSize();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.9,
  });

  useLayoutEffect(() => {
    setDataImages(data.pages);
  }, [data]);

  useLayoutEffect(() => {
    if (isIntersecting) {
      if (isIntersecting) fetchNextPage();
    }
  }, [isIntersecting, fetchNextPage]);

  useLayoutEffect(() => {
    if (width >= 600 && width <= 900) {
      setCountCol(2);
    } else if (width > 900) {
      setCountCol(3);
    }
  }, [width, setCountCol]);

  const renderListItem = dataImages.length
    ? dataImages.map((item, i) => (
        <Grid
          key={i}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          size={1}
        >
          {item.map((i) => (
            <Link
              href={`/gallery-detail/${i.id}`}
              replace={false}
              scroll={false}
              key={i.id}
              style={{ maxHeight: 'fit-content' }}
              prefetch={false}
            >
              <ImageItemComponent image={i} />
            </Link>
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
