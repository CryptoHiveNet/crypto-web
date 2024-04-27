import { Popover as FlowbitePopover } from 'flowbite-react';
import { forwardRef } from 'react';

import { iPopoverProps } from '@/types/types/components/popover';

const Popover = forwardRef<any, iPopoverProps>(
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
    }: iPopoverProps,
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
