import { AvatarImageProps, FlowbitePositions } from 'flowbite-react';
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

export type iAvatarProps = {
  id?: string;
  alt?: string;
  rounded?: boolean;
  stacked?: boolean;
  bordered?: boolean;
  color?: string;
  size?: string;
  placeholderInitials?: string;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: keyof FlowbitePositions;
  img?:
    | string
    | ((
        props: AvatarImageProps,
      ) => ReactElement<any, string | JSXElementConstructor<any>>);
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type iAvatarGroupProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iAvatarCounterProps = {
  id?: string;
  className?: string;
  total: number;
  href: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
