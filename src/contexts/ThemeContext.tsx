'use client';

import { cormorant_upright } from '@/app/fonts/fonts';
import { useLayoutStore } from '@/hooks/useLayout';

/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createTheme, Theme } from '@mui/material';
import { createContext, PropsWithChildren } from 'react';

export interface IProps extends PropsWithChildren {}

interface IValueContext {
  mode?: boolean;
  switchMode?: () => void;
  theme?: Theme;
}

export const ThemeContext = createContext<IValueContext>({});

export default function ThemeContextProvider(props: IProps) {
  const { mode, switchMode } = useLayoutStore((state) => state);
  const theme = createTheme({
    typography: {
      fontFamily: `var(${cormorant_upright.variable})`,
    },
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
