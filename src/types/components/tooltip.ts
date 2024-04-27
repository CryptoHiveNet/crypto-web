import { ReactNode } from 'react';

export type iTooltipProps = {
  id?: string;
  content: string;
  style?: 'dark' | 'light' | 'auto';
  placement?: 'top' | 'right' | 'bottom' | 'left';
  trigger?: 'hover' | 'click';
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
