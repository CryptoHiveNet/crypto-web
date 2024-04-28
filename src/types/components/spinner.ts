import { SpinnerProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iSpinnerProps = { ariaLabel: string } & SpinnerProps &
  UserReactionProps &
  BaseProps;
