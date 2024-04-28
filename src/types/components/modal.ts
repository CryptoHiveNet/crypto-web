import {
  ModalBodyProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iModalProps = ModalProps & UserReactionProps & BaseProps;
export type iModalHeaderProps = ModalHeaderProps &
  UserReactionProps &
  BaseProps;
export type iModalBodyProps = ModalBodyProps & UserReactionProps & BaseProps;
export type iModalFooterProps = ModalFooterProps &
  UserReactionProps &
  BaseProps;
