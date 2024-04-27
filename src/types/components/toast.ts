import { ReactNode } from 'react';

export type iToastProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iToastToggleProps = {
  id?: string;
  className?: string;
  testId?: string;
  onDismiss?: () => void;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
