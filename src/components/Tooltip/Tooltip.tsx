import { Tooltip as FlowbiteTooltip } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTooltipProps } from '@/types/types/components/tooltip';

const Tooltip = forwardRef<any, iTooltipProps>(
  (
    {
      id,
      content,
      style,
      placement,
      trigger,
      animation,
      arrow,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTooltipProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTooltip
        id={id}
        content={content}
        style={style}
        placement={placement}
        trigger={trigger}
        animation={animation}
        arrow={arrow}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteTooltip>
    );
  },
);

export default Tooltip;
