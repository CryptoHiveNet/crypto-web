import { ModalFooter as FlowbiteModalFooter } from 'flowbite-react';
import { forwardRef } from 'react';

import { iModalFooterProps } from '@/types/types/components/modal';

const ModalFooter = forwardRef<any, iModalFooterProps>(
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
    }: iModalFooterProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteModalFooter
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
      </FlowbiteModalFooter>
    );
  },
);

export default ModalFooter;
