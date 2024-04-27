import { ReactNode } from 'react';

export type iPopoverProps = {
  id?: string;
  ariaLabelledby?: string;
  content?: ReactNode;
  trigger?: string;
  open?: boolean;
  onOpenChange?: () => void;
  placement?: string;
  arrow?: boolean;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
