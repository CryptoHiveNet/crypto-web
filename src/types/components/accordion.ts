import { AccordionProps } from 'flowbite-react';
import { ReactNode } from 'react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iAccordionProps = AccordionProps & UserReactionProps & BaseProps;
export type iAccordionItemProps = {
  titleClassName?: string;
  contentClassName?: string;
  title: string;
  content: ReactNode;
} & UserReactionProps &
  BaseProps;
