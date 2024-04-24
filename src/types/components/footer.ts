import { FC, SVGProps } from 'react';

export type iFooterProps = {
  id?: string;
  className?: string;
  container?: boolean;
  bgDark?: boolean;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iFooterCopyrightProps = {
  id?: string;
  className?: string;
  href?: string;
  by: string;
  year?: number;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iFooterLinkGroupProps = {
  id?: string;
  className?: string;
  col?: boolean;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iFooterLinkProps = {
  id?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type iFooterBrandProps = {
  id?: string;
  className?: string;
  href?: string;
  src: string;
  alt?: string;
  name?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iFooterDividerProps = {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iFooterTitleProps = {
  id?: string;
  title: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iFooterIconProps = {
  id?: string;
  href?: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
