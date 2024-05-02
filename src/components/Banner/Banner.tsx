import { Banner as FlowbiteBanner } from 'flowbite-react';
import { forwardRef } from 'react';

import { BannerProps } from '@/types/shared/types/components/banner';

// eslint-disable-next-line react/display-name
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
