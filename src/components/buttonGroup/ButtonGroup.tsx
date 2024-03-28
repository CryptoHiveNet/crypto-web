import React, { ReactNode } from 'react';
import { Button as FlowbiteButton } from 'flowbite-react';

export type iButtonGroupProps = {
  id?: string;
  outline?: boolean;
  children: React.ReactNode;
};

const ButtonGroup = ({ id, outline, children }: iButtonGroupProps) => {
  return (
    <FlowbiteButton.Group id={id} outline={outline}>
      {children}
    </FlowbiteButton.Group>
  );
};

export default ButtonGroup;
