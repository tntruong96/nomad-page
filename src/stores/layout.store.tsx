import { ILayoutStore } from '@/types/layout.type';
import { createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IInitialState {
  mode: boolean;
  lastPath: string;
  lastBtmTab?: number;
  changeTabNavBottom: (value: number) => void;
  _hasHydrated: boolean;
}

const defaultState: IInitialState = {
  mode: false,
  lastPath: '',
  lastBtmTab: undefined,
  _hasHydrated: false,
  changeTabNavBottom: (_value: number) => {},
};

const createLayoutStore = (initialState: IInitialState = defaultState) => {
  return createStore<ILayoutStore>()(
    persist(
      (set) => ({
        ...initialState,
        switchMode: () =>
          set((state) => {
            return {
              mode: !state.mode,
            };
          }),
        setHasHydrated: (value: boolean) => {
          set((state) => ({
            ...state,
            _hasHydrated: value,
          }));
        },
        changeTabNavBottom: (value: number) =>
          set((state) => ({ ...state, lastBtmTab: value })),
      }),
      {
        name: 'layout',
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: (state) => {
          return () => state.setHasHydrated(true);
        },
      },
    ),
  );
};
export default createLayoutStore;
