import { FileInputProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iFileInputProps = FileInputProps & BaseProps & UserReactionProps;
