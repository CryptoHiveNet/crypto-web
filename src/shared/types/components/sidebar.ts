<<<<<<< HEAD:src/shared/types/components/sidebar.ts
import { FC, JSXElementConstructor, ReactElement, SVGProps } from 'react';

import { FlowbiteSidebarCollapseTheme } from 'flowbite-react';

export type SidebarProps = {
    id?: string;
    ariaLabel?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type SidebarItemsProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type SidebarItemGroupProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type SidebarItemProps = {
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
export type SidebarCollapseProps = {
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
export type SidebarLogoProps = {
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
export type SidebarCTAProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
=======
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
>>>>>>> 34abecb (feat: added sidebar component and sub components and their unit tests):src/types/components/sidebar.ts
};
