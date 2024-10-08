interface ILayoutStore {
  mode: boolean;
  lastBtmTab?: number;
  _hasHydrated: boolean;
  changeTabNavBottom: (value: number) => void;
  switchMode: () => void;
  setHasHydrated: (params: boolean) => void;
}

export { type ILayoutStore };
