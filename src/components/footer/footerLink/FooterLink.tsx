import { FooterLink as FlowbiteFooterLink } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFooterLinkProps } from '@/types/types/components/footer';

const FooterLink = forwardRef<any, iFooterLinkProps>(
  (
    {
      id,
      className,
      href,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iFooterLinkProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterLink
        id={id}
        className={className}
        href={href}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteFooterLink>
    );
  },
);

export default FooterLink;
