import {
    ElementType,
    FC,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
    SVGProps,
} from 'react';

import { FlowbiteDropdownTheme } from 'flowbite-react';

export type DropdownProps = {
    id?: string;
    label?: ReactNode | string;
    dismissOnClick?: boolean;
    inline?: boolean;
    size?: string;
    placement?: any;
    renderTrigger?: (
        theme: FlowbiteDropdownTheme,
    ) => ReactElement<any, string | JSXElementConstructor<any>>;
    children?: ReactNode;
    className?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type DropdownItemProps = {
    id?: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
    as?: ElementType | null;
    href?: string;
    target?: string;
    children?: ReactNode;
    className?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type DropdownHeaderProps = {
    id?: string;
    children?: ReactNode;
    className?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type DropdownDividerProps = {
    id?: string;
    className?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
