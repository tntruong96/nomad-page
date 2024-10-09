'use client';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
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
  action: ReactNode;
}

interface IPropsContext extends PropsWithChildren {}

function reducer(
  state: IStore,
  action: { type: string; value: unknown },
): IStore {
  switch (action.type) {
    case 'set-title':
      break;
    case 'set-content':
      break;
    case 'set-action':
      break;
    default:
      break;
  }

  return state;
}

const initialStore: IStore = {
  content: <>Content</>,
  title: 'Title',
  action: (
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
});

const ModalContextProvider: FC<IPropsContext> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [state, _dispatch] = useReducer(reducer, initialStore);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <ModalContext.Provider value={{ open, onOpen }}>
        {children}
      </ModalContext.Provider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullScreen={fullScreen}
      >
        <DialogTitle id="responsive-dialog-title">{state.title}</DialogTitle>
        <DialogContent>{state.content}</DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export { ModalContext, ModalContextProvider };
