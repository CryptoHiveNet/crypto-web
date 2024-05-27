import { FC, SVGProps } from 'react';

export type FooterProps = {
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
export type FooterCopyrightProps = {
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
export type FooterLinkGroupProps = {
  id?: string;
  className?: string;
  col?: boolean;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type FooterLinkProps = {
  id?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type FooterBrandProps = {
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
export type FooterDividerProps = {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type FooterTitleProps = {
  id?: string;
  title: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type FooterIconProps = {
  id?: string;
  href?: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
