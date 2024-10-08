import { styled } from '@mui/material';
import React, { FC } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface IProps extends CircularProgressProps {}

const CircleProgressComponent: FC<IProps> = (props) => {
  return <CustomCircleProgress {...props} />;
};

export default CircleProgressComponent;

const CustomCircleProgress = styled(CircularProgress)(({ theme }) => ({
  color: '#333',
  ...theme.applyStyles('dark', {
    color: '#fff',
  }),
}));
