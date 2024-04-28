import { ToastProps, ToastToggleProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iToastProps = ToastProps & UserReactionProps & BaseProps;
export type iToastToggleProps = ToastToggleProps &
  UserReactionProps &
  BaseProps;
