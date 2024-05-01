import { Dropdown as FlowbiteDropdown } from 'flowbite-react';
import { forwardRef } from 'react';

import { DropdownProps } from '@/types/shared/types/components/dropdown';

const Dropdown = forwardRef<any, DropdownProps>(
  (
    {
      id,
      label,
      dismissOnClick,
      inline,
      size,
      placement,
      renderTrigger,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: DropdownProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteDropdown
        id={id}
        label={label}
        dismissOnClick={dismissOnClick}
        inline={inline}
        size={size}
        placement={placement}
        renderTrigger={renderTrigger}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        // ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteDropdown>
    );
  },
);

export default Dropdown;
