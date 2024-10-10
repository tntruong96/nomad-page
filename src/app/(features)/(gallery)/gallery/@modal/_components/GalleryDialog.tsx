'use client';

import { Dialog, DialogContent, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends PropsWithChildren {}

const GalleryDialog: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const navigate = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          // maxHeight: 'none',
          // height: 'inherit',
          // maxWidth: 'none',
          // width: '800px',
        },
      }}
      fullScreen={fullScreen}
      fullWidth
      open={open}
      onClose={() => {
        navigate.back();
        setOpen(false);
      }}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default GalleryDialog;
