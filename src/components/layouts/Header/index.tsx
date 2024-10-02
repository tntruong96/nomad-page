'use client';

import { Box } from '@mui/material';
import SwitchModeComponent from '../SwitchMode';

function Header() {
  return (
    <Box
      component={'header'}
      className="flex min-h-[50px] items-center justify-between px-4 sm:hidden"
    >
      <Box>Logo</Box>
      <Box>
        <SwitchModeComponent />
      </Box>
    </Box>
  );
}

export default Header;
