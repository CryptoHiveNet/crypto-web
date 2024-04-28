import { CardProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iCardProps = CardProps & UserReactionProps & BaseProps;
