import Button from '@/components/Button';
import { getImage } from '@/services/gallery.service';
import { getBase64Blur } from '@/services/placeholder.service';
import ShareIcon from '@mui/icons-material/Share';
import { Box, ButtonGroup, Chip, Stack } from '@mui/material';
import Image from 'next/image';

const GalleryDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getImage(params.id);
  const { base64, img } = await getBase64Blur(data.urls.regular);
  console.log(data);

  return (
    <Box component={'div'}>
      <Image
        {...img}
        alt={data.slug}
        blurDataURL={base64}
        width={700}
        height={400}
        placeholder="blur"
      />
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
            <Box>Time</Box>
            <Box>Place</Box>
          </Stack>
          <Box className="flex-auto">
            <Button>
              <ShareIcon sx={{ fontSize: '14px' }} />
            </Button>
          </Box>
        </Box>
        <Box>
          <p>{data.alt_description}</p>
        </Box>
        <Box component={'div'}>
          <Box component={'span'}></Box>
        </Box>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {data.tags.map((item) => (
            <Chip key={Math.random()} label={item.title} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default GalleryDetailPage;
