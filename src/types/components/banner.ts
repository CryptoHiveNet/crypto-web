import {
  BannerCollapseButtonProps,
  BannerComponentProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iBannerProps = BannerComponentProps & UserReactionProps & BaseProps;
export type iBannerCollapseButtonProps = BannerCollapseButtonProps &
  UserReactionProps &
  BaseProps;
