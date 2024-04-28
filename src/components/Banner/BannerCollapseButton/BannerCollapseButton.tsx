import { BannerCollapseButton as FlowbiteBannerCollapseButton } from 'flowbite-react';
import { forwardRef } from 'react';

import { iBannerCollapseButtonProps } from '@/types/types/components/banner';

const BannerCollapseButton = forwardRef<any, iBannerCollapseButtonProps>(
  (
    {
      id,
      color,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iBannerCollapseButtonProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteBannerCollapseButton
        id={id}
        color={color}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteBannerCollapseButton>
    );
  },
);

export default BannerCollapseButton;
