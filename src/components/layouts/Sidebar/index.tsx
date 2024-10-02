'use client';

import { Box, Drawer, List, ListItem, SvgIcon } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import SwitchModeComponent from '../SwitchMode';
import { ListSideBar } from './config';

interface ISideBar {
  open: boolean;
  // mode?: 'dark' | 'light';
}

const SideBar: FC<ISideBar> = ({ open }) => {
  const pathname = usePathname();

  // console.log(_hasHydrated);

  /* STATE */

  const renderListItem = () => (
    <List
      sx={{
        width: '100%',
        height: 'inherit',
        display: { xs: 'flex', sm: 'block' },
        position: 'relative',
      }}
    >
      <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>logo</Box>
        <SwitchModeComponent
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        />
      </ListItem>
      {ListSideBar.map((item) => (
        <ListItem
          key={item.title}
          sx={{
            px: { sm: '4px', md: '12px' },
          }}
        >
          <Link href={item.href} className="w-full">
            <Box
              component={'div'}
              sx={{
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                },
                borderColor: 'grey.700',
              }}
              className={`flex w-full items-center gap-4 p-2 ${
                pathname.includes(item.href)
                  ? `rounded-lg border border-solid`
                  : ''
              } `}
            >
              <SvgIcon component={item.iconOutlined} />
              <Box
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'block' },
                }}
              >
                <p className="font-bold">{item.title}</p>
              </Box>
            </Box>
          </Link>
        </ListItem>
      ))}
      <ListItem
        className="absolute bottom-0 hidden justify-center px-2 sm:flex md:hidden"
        sx={{
          position: 'absolute',
          bottom: 0,
          display: { xs: 'none', sm: 'flex', md: 'none' },
          justifyContent: 'center',
          px: 2,
        }}
      >
        <SwitchModeComponent />
      </ListItem>
    </List>
  );

  // if (!_hasHydrated) return <div>loading</div>;

  return (
    <Box
      component={'nav'}
      sx={{
        width: { xs: '20%', sm: '50px', md: '200px' },
        position: { xs: 'absolute', sm: 'relative' },
        bottom: { xs: 0 },
      }}
      className="flex-initial"
    >
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { sm: '50px', md: '200px' },
          },
        }}
        className="flex-initial"
      >
        {renderListItem()}
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="bottom"
        open={open}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
          },
        }}
      >
        {renderListItem()}
      </Drawer>
    </Box>
  );
};

export default SideBar;
