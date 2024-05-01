import { ElementType } from 'react';

export type NavbarProps = {
  id?: string;
  className?: string;
  fluid?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type NavbarBrandProps = {
  id?: string;
  className?: string;
  as?: ElementType;
  href?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type NavbarToggleProps = {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type NavbarCollapseProps = {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type NavbarLinkProps = {
  id?: string;
  className?: string;
  href?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
