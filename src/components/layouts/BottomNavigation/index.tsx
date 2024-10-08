'use client';

import { useLayoutStore } from '@/hooks/useLayout';
import { AssignmentInd, BorderColor, Collections } from '@mui/icons-material';
import { BottomNavigationProps, styled } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';

interface IBottomItem {
  icon: React.ReactNode;
}

const items: IBottomItem[] = [
  {
    icon: <BorderColor />,
  },
  { icon: <Collections /> },
  {
    icon: <AssignmentInd />,
  },
];

interface IProps extends BottomNavigationProps {}

const BottomNavigationComponent: FC<IProps> = ({ ...props }) => {
  const { lastBtmTab, changeTabNavBottom } = useLayoutStore((state) => state);

  const onNavigate = () => {
    switch (lastBtmTab) {
      case 0:
        navigate.push('/blog');
        break;
      case 1:
        navigate.push('/gallery');
        break;
      case 2:
        navigate.push('/resume');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    onNavigate();
  }, [lastBtmTab]);

  const navigate = useRouter();
  return (
    <BottomNavigation
      sx={{
        display: { sm: 'none' },
        position: 'fixed',
        bottom: '0',
        width: '100%',
        marginTop: '40px',
      }}
      {...props}
      value={lastBtmTab}
      onChange={(event, newValue) => {
        changeTabNavBottom(newValue);
      }}
    >
      {items.map((item) => (
        <BottomNavigationActionCustom key={Math.random()} icon={item.icon} />
      ))}
    </BottomNavigation>
  );
};

const BottomNavigationActionCustom = styled(BottomNavigationAction)(
  ({ theme }) => ({
    '& .MuiSvgIcon-root': {
      opacity: 0.8,
    },
    '&.Mui-selected': {
      color: '#333',
      ...theme.applyStyles('dark', {
        color: '#fff',
      }),
      '& .MuiSvgIcon-root': {
        opacity: 1,
      },
    },
  }),
);

export default BottomNavigationComponent;
