import { FC, SVGProps } from 'react';

import { TabStyles } from 'flowbite-react';

export type TabsProps = {
    id?: string;
    ariaLabel?: string;
    style?: keyof TabStyles;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onActiveTabChange?: () => void;
};
export type TabsItemProps = {
    id?: string;
    active?: boolean;
    disabled?: boolean;
    title?: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
