import React, { ReactNode } from 'react';
import { Button as FlowbiteButton } from 'flowbite-react';

export type iButtonGroupProps = {
  id?: string;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const ButtonGroup = ({
  id,
  outline,
  children,
  className,
}: iButtonGroupProps) => {
  return (
    <FlowbiteButton.Group id={id} outline={outline} className={className}>
      {children}
    </FlowbiteButton.Group>
  );
};

export default ButtonGroup;
