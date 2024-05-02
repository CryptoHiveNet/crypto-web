import { FooterLink as FlowbiteFooterLink } from 'flowbite-react';
import { forwardRef } from 'react';

import { FooterLinkProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const FooterLink = forwardRef<any, FooterLinkProps>(
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
    }: FooterLinkProps,
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
