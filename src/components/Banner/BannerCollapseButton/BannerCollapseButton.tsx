import { BannerCollapseButton as FlowbiteBannerCollapseButton } from 'flowbite-react';
import { forwardRef } from 'react';

import { BannerCollapseButtonProps } from '@/types/shared/types/components/banner';

const BannerCollapseButton = forwardRef<any, BannerCollapseButtonProps>(
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
    }: BannerCollapseButtonProps,
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
        {...rest}
      >
        {children}
      </FlowbiteBannerCollapseButton>
    );
  },
);

export default BannerCollapseButton;
