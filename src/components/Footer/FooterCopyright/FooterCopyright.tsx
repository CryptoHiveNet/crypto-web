import { FooterCopyright as FlowbiteFooterCopyright } from 'flowbite-react';
import { forwardRef } from 'react';

import { FooterCopyrightProps } from '@/types/types/components/footer';

const FooterCopyright = forwardRef<any, FooterCopyrightProps>(
  (
    {
      id,
      className,
      href,
      by,
      year,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: FooterCopyrightProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterCopyright
        id={id}
        className={className}
        href={href}
        by={by}
        year={year}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default FooterCopyright;
