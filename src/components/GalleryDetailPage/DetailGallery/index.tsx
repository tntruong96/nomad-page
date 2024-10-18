import Button from '@/components/Button';
import { getBase64Blur } from '@/services/placeholder.service';
import { TImage } from '@/types/gallery.type';
import { formatDate } from '@/utils/formatDate';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import ZoomElement from '../ZoomElement/ZoomElement';

interface IProps {
  imageData: TImage;
}

const DetailGallery: FC<IProps> = async ({ imageData }) => {
  const { base64, img } = await getBase64Blur(imageData.urls.regular);

  return (
    <Box component={'div'} className="h-full w-full">
      <ZoomElement zoomContent={imageData}>
        <Image
          {...img}
          alt={imageData.slug}
          blurDataURL={base64}
          placeholder="blur"
          className="sm:cursor-zoom-in"
          style={{ objectFit: 'cover' }}
        />
      </ZoomElement>
      <Box
        component={'div'}
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box display={'flex'} justifyContent={'space-between'}>
          <Stack className="w-full flex-auto text-xs">
            {imageData.created_at ? (
              <Box
                component={'div'}
                className="flex items-center justify-start gap-1"
              >
                <CalendarTodayIcon sx={{ fontSize: 12 }} />
                <Typography fontSize={12}>
                  Published on {formatDate(imageData.created_at, 'dd-MM-yyyy')}
                </Typography>
              </Box>
            ) : null}
            {imageData?.location.name ||
            imageData.location.city ||
            imageData.location.country ? (
              <Box
                component={'div'}
                className="flex items-center justify-start gap-1"
              >
                <LocationOnIcon sx={{ fontSize: 12 }} />
                {`${imageData.location.name}, ${imageData.location.city}, ${imageData.location.country}`}
              </Box>
            ) : null}
          </Stack>
          <Box className="flex-auto">
            <Button>
              <ShareIcon sx={{ fontSize: '14px' }} />
            </Button>
          </Box>
        </Box>
        <Box>
          <p>{imageData.alt_description}</p>
        </Box>
        <Box component={'div'}>
          <Box component={'span'}></Box>
        </Box>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {imageData.tags.map((item) => (
            <Chip key={Math.random()} label={item.title} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailGallery;
