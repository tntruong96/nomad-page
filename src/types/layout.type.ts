interface ILayoutStore {
  mode: boolean;

  switchMode: () => void;
  _hasHydrated: boolean;
}

export { type ILayoutStore };
