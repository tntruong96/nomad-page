'use client';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useReducer,
  useState,
} from 'react';

interface IStore {
  content: ReactNode;
  title: string;
  actions: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IPropsContext extends PropsWithChildren {}

function reducer(
  state: IStore,
  action: { type: string; payload: ReactNode },
): IStore {
  switch (action.type) {
    case 'set-title':
      break;
    case 'set-content':
      return { ...state, actions: action.payload };
    case 'set-action':
      break;
    default:
      break;
  }

  return state;
}

const initialStore: IStore = {
  content: <>Content</>,
  title: '',
  actions: (
    <>
      {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
    </>
  ),
};

const ModalContext = createContext({
  open: false,
  onOpen: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatchAction: (props: { type: string; payload: ReactNode }) => {},
});

const ModalContextProvider: FC<IPropsContext> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialStore);

  const handleClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const dispatchAction: (props: {
    type: string;
    payload: ReactNode;
  }) => void = (props) => {
    const { type, payload } = props;
    dispatch({ type, payload });
  };

  return (
    <>
      <ModalContext.Provider value={{ open, onOpen, dispatchAction }}>
        {children}
      </ModalContext.Provider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        // fullScreen={fullScreen}
      >
        <DialogTitle id="responsive-dialog-title">{state.title}</DialogTitle>
        <DialogContent>{state.content}</DialogContent>
        <DialogActions>{state.actions}</DialogActions>
      </Dialog>
    </>
  );
};

export { ModalContext, ModalContextProvider };
