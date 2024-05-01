import { FooterLinkGroup as FlowbiteFooterLinkGroup } from 'flowbite-react';
import { forwardRef } from 'react';

import { FooterLinkGroupProps } from '@/types/types/components/footer';

const FooterLinkGroup = forwardRef<any, FooterLinkGroupProps>(
  (
    {
      id,
      className,
      col,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: FooterLinkGroupProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterLinkGroup
        id={id}
        className={className}
        col={col}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteFooterLinkGroup>
    );
  },
);

export default FooterLinkGroup;
