import { LayoutContext } from '@/contexts/LayoutStoreContext';
import { ILayoutStore } from '@/types/layout.type';
import { useContext } from 'react';
import { useStore } from 'zustand';

export const useLayoutStore = <T,>(selector: (store: ILayoutStore) => T): T => {
  const layoutContext = useContext(LayoutContext);
  if (!layoutContext) {
    throw new Error(`useLayoutStore must be used within LayoutStoreProvider`);
  }
  return useStore(layoutContext, selector);
};
