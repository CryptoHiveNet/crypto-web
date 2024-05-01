import { MutableRefObject, ReactNode } from 'react';

export type ModalProps = {
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
export type ModalHeaderProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type ModalBodyProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type ModalFooterProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
