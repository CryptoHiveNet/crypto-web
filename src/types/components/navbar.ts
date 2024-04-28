import {
  NavbarBrandProps,
  NavbarCollapseProps,
  NavbarComponentProps,
  NavbarLinkProps,
  NavbarToggleProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iNavbarProps = NavbarComponentProps & UserReactionProps & BaseProps;
export type iNavbarBrandProps = NavbarBrandProps &
  UserReactionProps &
  BaseProps;
export type iNavbarToggleProps = NavbarToggleProps &
  UserReactionProps &
  BaseProps;
export type iNavbarCollapseProps = NavbarCollapseProps &
  UserReactionProps &
  BaseProps;

export type iNavbarLinkProps = NavbarLinkProps & UserReactionProps & BaseProps;
