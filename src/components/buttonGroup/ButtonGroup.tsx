import React, { ReactNode } from 'react';
import { Button as FlowbiteButton } from 'flowbite-react';

export type iButtonGroupProps = {
  id?: string;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const ButtonGroup = ({
  id,
  outline,
  children,
  className,
  testId,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: iButtonGroupProps) => {
  return (
    <FlowbiteButton.Group
      id={id}
      outline={outline}
      className={className}
      data-testid={testId}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </FlowbiteButton.Group>
  );
};

export default ButtonGroup;
