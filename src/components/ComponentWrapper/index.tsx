import { ThemeContext } from '@/contexts/ThemeContext';
import { ThemeProvider } from '@emotion/react';
import React, { PropsWithChildren, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends PropsWithChildren {}

const ComponentWrapper = (props: IProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme ? theme : {}}>{props.children}</ThemeProvider>
  );
};

export default ComponentWrapper;
