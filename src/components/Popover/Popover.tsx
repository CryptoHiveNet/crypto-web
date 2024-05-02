import { Popover as FlowbitePopover } from 'flowbite-react';
import { forwardRef } from 'react';

import { PopoverProps } from '@/types/shared/types/components/popover';

// eslint-disable-next-line react/display-name
const Popover = forwardRef<any, PopoverProps>(
  (
    {
      id,
      ariaLabelledby,
      content,
      trigger,
      open,
      onOpenChange,
      placement,
      arrow,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: PopoverProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbitePopover
        id={id}
        aria-labelledby={ariaLabelledby}
        content={content}
        trigger={trigger}
        open={open}
        onOpenChange={onOpenChange}
        placement={placement}
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
      </FlowbitePopover>
    );
  },
);

export default Popover;
