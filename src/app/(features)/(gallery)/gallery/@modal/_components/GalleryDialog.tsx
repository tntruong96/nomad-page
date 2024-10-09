'use client';

import { useGetImageDetail } from '@/hooks/query/useGallery';
import { ModalContext } from '@/hooks/useModalContext';
import { FC, PropsWithChildren, useContext, useLayoutEffect } from 'react';

interface IProps extends PropsWithChildren {
  id: string;
}

const GalleryDialog: FC<IProps> = ({ children, id }) => {
  const { data } = useGetImageDetail(id);
  const { onOpen } = useContext(ModalContext);
  useLayoutEffect(() => {
    onOpen();
  }, []);
  return <div></div>;
};

export default GalleryDialog;
