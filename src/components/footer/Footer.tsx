import { Footer as FlowbiteFooter } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFooterProps } from '@/types/types/components/footer';

const Footer = forwardRef<any, iFooterProps>(
  (
    {
      id,
      className,
      container,
      bgDark,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iFooterProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooter
        id={id}
        className={className}
        container={container}
        bgDark={bgDark}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteFooter>
    );
  },
);

export default Footer;
