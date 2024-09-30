/* eslint-disable @typescript-eslint/no-empty-object-type */
import { styled, Switch, SwitchProps } from '@mui/material';
import React, { FC } from 'react';

interface Props extends SwitchProps {}

const SwitchComponent: FC<Props> = (props) => {
  return <CustomSwitch {...props} />;
};

export default SwitchComponent;

const CustomSwitch = styled(Switch, {
  shouldForwardProp(propName) {
    return propName !== 'a';
  },
})(() => ({}));
