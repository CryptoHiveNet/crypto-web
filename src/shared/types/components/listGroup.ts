import { FC, SVGProps } from 'react';

export type ListGroupContainerProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type ListGroupItemProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  active?: boolean;
  icon?: FC<SVGProps<SVGSVGElement>>;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
