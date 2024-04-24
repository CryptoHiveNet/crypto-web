import { FooterDivider as FlowbiteFooterDivider } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFooterDividerProps } from '@/types/types/components/footer';

const FooterDivider = forwardRef<any, iFooterDividerProps>(
  (
    {
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iFooterDividerProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterDivider
        id={id}
        className={className}
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

export default FooterDivider;
