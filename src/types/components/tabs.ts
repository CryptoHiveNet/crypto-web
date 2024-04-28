import { TabItemProps, TabsProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iTabsProps = { ariaLabel: string } & TabsProps &
  UserReactionProps &
  BaseProps;
export type iTabsItemProps = TabItemProps & UserReactionProps & BaseProps;
