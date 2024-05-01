import { Accordion as FlowbiteAccordion } from 'flowbite-react';
import { forwardRef } from 'react';

import { AccordionProps } from '@/types/shared/types/components/accordion';

const Accordion = forwardRef<any, AccordionProps>(
  (
    {
      id,
      collapseAll,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: AccordionProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteAccordion
        id={id}
        collapseAll={collapseAll}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteAccordion>
    );
  },
);

export default Accordion;
