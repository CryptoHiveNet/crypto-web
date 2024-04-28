import {
  CopyrightProps,
  FooterBrandProps,
  FooterDividerProps,
  FooterIconProps,
  FooterLinkGroupProps,
  FooterLinkProps,
  FooterProps,
  FooterTitleProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iFooterProps = FooterProps & UserReactionProps & BaseProps;
export type iFooterCopyrightProps = CopyrightProps &
  UserReactionProps &
  BaseProps;
export type iFooterLinkGroupProps = FooterLinkGroupProps &
  UserReactionProps &
  BaseProps;
export type iFooterLinkProps = FooterLinkProps & UserReactionProps & BaseProps;

export type iFooterBrandProps = FooterBrandProps &
  UserReactionProps &
  BaseProps;
export type iFooterDividerProps = FooterDividerProps &
  UserReactionProps &
  BaseProps;
export type iFooterTitleProps = FooterTitleProps &
  UserReactionProps &
  BaseProps;
export type iFooterIconProps = FooterIconProps & UserReactionProps & BaseProps;
