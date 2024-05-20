import { forwardRef } from 'react';

import {
    AccordionContent,
    AccordionPanel,
    AccordionTitle,
} from 'flowbite-react';

import { AccordionItemProps } from '@/types/shared/types/components/accordion';

// eslint-disable-next-line react/display-name
const AccordionItem = forwardRef<any, AccordionItemProps>(
    (
        {
            id,
            className,
            titleClassName,
            contentClassName,
            title,
            content,
            titleTestId,
            contentTestId,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: AccordionItemProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <AccordionPanel
                id={id}
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                <AccordionTitle
                    className={titleClassName}
                    data-testid={titleTestId}
                >
                    {title}
                </AccordionTitle>
                <AccordionContent
                    className={contentClassName}
                    data-testid={contentTestId}
                >
                    {content}
                </AccordionContent>
            </AccordionPanel>
        );
    },
);

export default AccordionItem;
