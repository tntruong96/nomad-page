'use client';

import { ButtonProps, styled } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export interface IButtonProps extends ButtonProps {}

const Button: FC<IButtonProps> = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;

const CustomButton = styled(MuiButton)(({ theme }) => ({
  minWidth: '32px',
  color: '#333',
  ...theme.applyStyles('dark', { color: '#fff' }),
  border: '1px solid',
}));
