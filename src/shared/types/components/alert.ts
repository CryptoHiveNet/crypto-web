import { FC, SVGProps } from 'react';

export type AlertProps = {
  id?: string;
  additionalContent?: JSX.Element;
  role?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  transitionDurations?: number;
  className?: string;
  children: JSX.Element | string;
  testId?: string;
  onClick?: () => void;
  onDismiss?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  dismissAfter?: number; // Optional time in milliseconds to automatically dismiss the alert
};
