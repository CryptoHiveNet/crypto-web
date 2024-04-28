import {
  AvatarGroupCounterProps,
  AvatarGroupProps,
  AvatarProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iAvatarProps = AvatarProps & UserReactionProps & BaseProps;

export type iAvatarGroupProps = AvatarGroupProps &
  UserReactionProps &
  BaseProps;
export type iAvatarCounterProps = AvatarGroupCounterProps &
  UserReactionProps &
  BaseProps;
