import { ModalHeader as FlowbiteModalHeader } from 'flowbite-react';
import { forwardRef } from 'react';

import { ModalHeaderProps } from '@/types/types/components/modal';

const ModalHeader = forwardRef<any, ModalHeaderProps>(
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
    }: ModalHeaderProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteModalHeader
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
      </FlowbiteModalHeader>
    );
  },
);

export default ModalHeader;
