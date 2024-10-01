interface ILayoutStore {
  mode: boolean;
  setHasHydrated: (props: boolean) => void;
  switchMode: () => void;
  _hasHydrated: boolean;
}

export { type ILayoutStore };
