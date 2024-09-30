import { styled, Switch } from '@mui/material';
import React from 'react';

const SwitchComponent = () => {
  return <CustomSwitch />;
};

export default SwitchComponent;

const CustomSwitch = styled(Switch, {
  shouldForwardProp(propName) {
    return propName !== 'a';
  },
})(() => ({}));
