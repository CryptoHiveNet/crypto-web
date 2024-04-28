import { ListGroupItemProps, ListGroupProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iListGroupContainerProps = ListGroupProps &
  UserReactionProps &
  BaseProps;
export type iListGroupItemProps = ListGroupItemProps &
  UserReactionProps &
  BaseProps;
