import { ElementType } from 'react';

export type iNavbarProps = {
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
export type iNavbarBrandProps = {
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
export type iNavbarToggleProps = {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iNavbarCollapseProps = {
  id?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type iNavbarLinkProps = {
  id?: string;
  className?: string;
  href?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
