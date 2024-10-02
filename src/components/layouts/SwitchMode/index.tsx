'use client';
import SwitchComponent from '@/components/Switch';

import { DarkMode, LightMode } from '@mui/icons-material';
import { styled, SxProps, Theme, useColorScheme } from '@mui/material';
import { FC } from 'react';

interface IProps {
  sx?: SxProps<Theme>;
  className?: string;
}

const SwitchModeComponent: FC<IProps> = ({ sx, className }) => {
  const { mode, setMode } = useColorScheme();

  const checkModeValue = () => {
    if (mode === 'light') {
      return false;
    } else {
      return true;
    }
  };

  if (!mode) {
    return null;
  }

  return (
    <CustomSwitchComponent
      sx={{ ...sx, bgcolor: 'background.default' }}
      className={className}
      value={checkModeValue()}
      checked={checkModeValue()}
      onChange={() => {
        setMode(mode === 'dark' ? 'light' : 'dark');
      }}
      icon={<LightMode sx={{ width: '0.9rem', height: '0.9rem' }} />}
      checkedIcon={
        <DarkMode
          fontSize="small"
          sx={{
            width: '0.9rem',
            height: '0.9rem',
            color: checkModeValue() ? '#333' : '',
          }}
        />
      }
    />
  );
};

export default SwitchModeComponent;

const CustomSwitchComponent = styled(SwitchComponent, {
  shouldForwardProp(propName) {
    return propName !== 'a';
  },
})(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '3px 4px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(14px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        border: 0,
        backgroundColor: '#bbb',
        ...theme.applyStyles('dark', {
          backgroundColor: '#fff',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        //   color: '#333',
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[900],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      // backgroundColor: '#33333',
    }),
  },
}));
