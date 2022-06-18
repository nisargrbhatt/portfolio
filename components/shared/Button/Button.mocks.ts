import { SyntheticEvent } from 'react';
import { IButton } from './Button';

const base: IButton = {
  title: 'Button',
  primary: true,
  secondary: false,
  warn: false,
  type: 'Simple',
  disabled: false,
  onClick: (e: SyntheticEvent) => {
    console.log(e);
  },
};

export const mockButtonProps = {
  base,
};
