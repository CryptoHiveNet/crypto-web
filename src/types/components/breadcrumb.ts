import { BreadcrumbComponentProps, BreadcrumbItemProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iBreadcrumbProps = {
  ariaLabel?: string;
} & BreadcrumbComponentProps &
  UserReactionProps &
  BaseProps;
export type iBreadcrumbItemProps = BreadcrumbItemProps &
  UserReactionProps &
  BaseProps;
