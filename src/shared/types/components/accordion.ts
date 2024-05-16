import { ReactNode } from 'react';

export type AccordionProps = {
    id?: string;
    collapseAll?: boolean;
    className?: string;
    children?: any;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type AccordionItemProps = {
    id?: string;
    className?: string;
    titleClassName?: string;
    contentClassName?: string;
    title: string;
    content: ReactNode;
    titleTestId?: string;
    contentTestId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
