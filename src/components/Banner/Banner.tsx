import { Banner as FlowbiteBanner } from 'flowbite-react';
import { forwardRef } from 'react';

import { BannerProps } from '@/types/types/components/banner';

const Banner = forwardRef<any, BannerProps>(
  (
    {
      id,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: BannerProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteBanner
        id={id}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteBanner>
    );
  },
);

export default Banner;