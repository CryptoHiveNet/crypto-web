import { ReactNode } from 'react';

export type PopoverProps = {
  id?: string;
  ariaLabelledby?: string;
  content?: ReactNode;
  trigger?: 'hover' | 'click';
  open?: boolean;
  onOpenChange?: () => void;
  placement?: any;
  arrow?: boolean;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
