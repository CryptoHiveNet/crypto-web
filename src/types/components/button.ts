import { ButtonProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iButtonProps = ButtonProps & UserReactionProps & BaseProps;
