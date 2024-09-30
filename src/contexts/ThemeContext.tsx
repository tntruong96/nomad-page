'use client';

import { cormorant_upright } from '@/app/fonts/fonts';
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createTheme, Theme } from '@mui/material';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

export interface IProps extends PropsWithChildren {}

interface IValueContext {
  mode?: boolean;
  setMode?: Dispatch<SetStateAction<boolean>>;
  theme?: Theme;
}

export const ThemeContext = createContext<IValueContext>({});

export default function ThemeContextProvider(props: IProps) {
  // const preferMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState(false);

  // useEffect(() => {
  //   setMode(preferMode);
  // }, [preferMode]);

  const theme = createTheme({
    typography: {
      fontFamily: `var(${cormorant_upright.variable})`,
    },
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
