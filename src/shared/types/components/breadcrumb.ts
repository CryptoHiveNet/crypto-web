import { FC, SVGProps } from 'react';

export type BreadcrumbProps = {
  id?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type BreadcrumbItemProps = {
  id?: string;
  href?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
