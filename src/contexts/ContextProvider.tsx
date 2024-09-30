/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import { PropsWithChildren } from 'react';
import ThemeContextProvider from './ThemeContext';
import ComponentWrapper from '@/components/ComponentWrapper';

interface IProps extends PropsWithChildren {}

export default function ContextProvider(props: IProps) {
  return (
    <ThemeContextProvider>
      <ComponentWrapper>{props.children}</ComponentWrapper>
    </ThemeContextProvider>
  );
}
