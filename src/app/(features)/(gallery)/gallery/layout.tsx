import React, { FC, PropsWithChildren, ReactNode } from 'react';

interface IProps extends PropsWithChildren {
  modal: ReactNode;
}

const GalleryLayout: FC<IProps> = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default GalleryLayout;
