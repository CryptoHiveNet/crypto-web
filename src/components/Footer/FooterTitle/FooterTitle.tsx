import { FooterTitle as FlowbiteFooterTitle } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFooterTitleProps } from '@/types/types/components/footer';

const FooterTitle = forwardRef<any, iFooterTitleProps>(
  (
    {
      id,
      title,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iFooterTitleProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterTitle
        id={id}
        title={title}
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

export default FooterTitle;
