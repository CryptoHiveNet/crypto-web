import { FlowbiteSidebarCollapseTheme } from 'flowbite-react';
import { FC, JSXElementConstructor, ReactElement, SVGProps } from 'react';

export type iSidebarProps = {
  id?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iSidebarItemsProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iSidebarItemGroupProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iSidebarItemProps = {
  id?: string;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  labelColor?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iSidebarCollapseProps = {
  id?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  label?: string;
  renderChevronIcon?: (
    theme: FlowbiteSidebarCollapseTheme,
    open: boolean,
  ) => ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iSidebarLogoProps = {
  id?: string;
  href: string;
  img: string;
  imgAlt?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iSidebarCTAProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
