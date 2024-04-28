import { AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import { forwardRef } from 'react';

import { iAccordionItemProps } from '@/types/types/components/accordion';

const AccordionItem = forwardRef<any, iAccordionItemProps>(
  (
    {
      id,
      className,
      titleClassName,
      contentClassName,
      title,
      content,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iAccordionItemProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <AccordionPanel
        id={id}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        <AccordionTitle className={titleClassName}>{title}</AccordionTitle>
        <AccordionContent className={contentClassName}>
          {content}
        </AccordionContent>
      </AccordionPanel>
    );
  },
);

export default AccordionItem;
