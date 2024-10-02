import { ILayoutStore } from '@/types/layout.type';
import { createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IInitialState {
  mode: boolean;
  _hasHydrated: boolean;
}

const defaultState: IInitialState = {
  mode: false,
  _hasHydrated: false,
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
        setHasHydrated: () => set(() => ({})),
      }),
      {
        name: 'layout',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );
};
export default createLayoutStore;
