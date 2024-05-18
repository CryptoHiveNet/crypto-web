import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { AvatarImageProps, FlowbitePositions } from 'flowbite-react';

export type AvatarProps = {
    id?: string;
    alt?: string;
    rounded?: boolean;
    stacked?: boolean;
    bordered?: boolean;
    color?:
        | 'dark'
        | 'failure'
        | 'gray'
        | 'info'
        | 'light'
        | 'purple'
        | 'success'
        | 'warning'
        | 'pink';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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

export type AvatarGroupProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type AvatarCounterProps = {
    id?: string;
    className?: string;
    total: number;
    href: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
