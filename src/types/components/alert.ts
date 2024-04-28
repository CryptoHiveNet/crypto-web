import { AlertProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iAlertProps = { dismissAfter: number } & AlertProps &
  UserReactionProps &
  BaseProps;
