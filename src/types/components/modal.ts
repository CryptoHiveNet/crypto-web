import { MutableRefObject, ReactNode } from 'react';

export type iModalProps = {
  id?: string;
  show?: boolean;
  onClose?: () => void;
  dismissible?: boolean;
  size?: string;
  popup?: boolean;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
  position?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iModalHeaderProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iModalBodyProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iModalFooterProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
