import {
  SidebarCollapseProps,
  SidebarCTAProps,
  SidebarItemGroupProps,
  SidebarItemProps,
  SidebarItemsProps,
  SidebarLogoProps,
  SidebarProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iSidebarProps = { ariaLabel: string } & SidebarProps &
  UserReactionProps &
  BaseProps;
export type iSidebarItemsProps = SidebarItemsProps &
  UserReactionProps &
  BaseProps;
export type iSidebarItemGroupProps = SidebarItemGroupProps &
  UserReactionProps &
  BaseProps;
export type iSidebarItemProps = SidebarItemProps &
  UserReactionProps &
  BaseProps;
export type iSidebarCollapseProps = SidebarCollapseProps &
  UserReactionProps &
  BaseProps;
export type iSidebarLogoProps = SidebarLogoProps &
  UserReactionProps &
  BaseProps;
export type iSidebarCTAProps = SidebarCTAProps & UserReactionProps & BaseProps;
