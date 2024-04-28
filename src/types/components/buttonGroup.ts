import { ButtonGroupProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iButtonGroupProps = ButtonGroupProps &
  UserReactionProps &
  BaseProps;
