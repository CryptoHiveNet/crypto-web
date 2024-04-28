import {
  RatingAdvancedProps,
  RatingProps,
  RatingStarProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iRatingProps = RatingProps & UserReactionProps & BaseProps;
export type iRatingStarProps = RatingStarProps & UserReactionProps & BaseProps;
export type iRatingAdvancedProps = RatingAdvancedProps &
  UserReactionProps &
  BaseProps;
