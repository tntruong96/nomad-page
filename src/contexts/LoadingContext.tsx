'use client';

import { Backdrop, CircularProgress } from '@mui/material';
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<IProps>({
  open: false,
  setOpen: () => {},
});

const LoadingContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <LoadingContext.Provider value={{ open, setOpen }}>
        {children}
      </LoadingContext.Provider>
      <Backdrop
        sx={(theme) => ({
          background: 'blue',
          color: 'red',
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default LoadingContextProvider;
