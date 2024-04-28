import { TextInputProps } from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export enum TextInputType {
  text = 'text',
  passwords = 'passwords',
  number = 'number',
  email = 'email',
}
export type iTextBoxProps = { labelText: string } & TextInputProps &
  UserReactionProps &
  BaseProps;
