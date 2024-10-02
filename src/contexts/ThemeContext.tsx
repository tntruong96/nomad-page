'use client';

import { cormorant_upright } from '@/app/fonts/fonts';

/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createTheme, Theme } from '@mui/material';
import { createContext, PropsWithChildren } from 'react';

export interface IProps extends PropsWithChildren {}

interface IValueContext {
  theme: Theme;
}

const initiateTheme = createTheme({
  typography: {
    fontFamily: `var(${cormorant_upright.variable})`,
  },
  colorSchemes: {
    dark: true,
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
});

export const ThemeContext = createContext<IValueContext>({
  theme: initiateTheme,
});

export default function ThemeContextProvider(props: IProps) {
  const theme = initiateTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
