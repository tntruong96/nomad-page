'use client';
import createLayoutStore from '@/stores/layout.store';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useRef,
} from 'react';

export type LayoutStoreApi = ReturnType<typeof createLayoutStore>;

export const LayoutContext = createContext<LayoutStoreApi | undefined>(
  undefined,
);

export interface ILayoutContextProps {
  children: ReactNode;
}

const LayoutStoreProvider = ({ children }: ILayoutContextProps) => {
  const ref = useRef<LayoutStoreApi>();
  if (!ref.current) {
    ref.current = createLayoutStore();
  }

  return (
    <LayoutContext.Provider value={ref.current}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutStoreProvider;
