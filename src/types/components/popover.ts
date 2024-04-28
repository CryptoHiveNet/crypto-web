import { PopoverProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iPopoverProps = { ariaLabelledby: string } & PopoverProps &
  UserReactionProps &
  BaseProps;
