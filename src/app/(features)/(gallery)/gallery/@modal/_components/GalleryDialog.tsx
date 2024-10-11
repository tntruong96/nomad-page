'use client';

import {
  Dialog as DialogMUI,
  DialogContent,
  useMediaQuery,
  useTheme,
  styled,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends PropsWithChildren {}

const GalleryDialog: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const navigate = useRouter();

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
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

const Dialog = styled(DialogMUI)({});
