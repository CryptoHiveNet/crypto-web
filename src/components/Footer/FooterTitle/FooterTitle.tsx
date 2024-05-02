import { FooterTitle as FlowbiteFooterTitle } from 'flowbite-react';
import { forwardRef } from 'react';

import { FooterTitleProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const FooterTitle = forwardRef<any, FooterTitleProps>(
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
    }: FooterTitleProps,
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
