import { ModalBody as FlowbiteModalBody } from 'flowbite-react';
import { forwardRef } from 'react';

import { iModalBodyProps } from '@/types/types/components/modal';

const ModalBody = forwardRef<any, iModalBodyProps>(
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
    }: iModalBodyProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteModalBody
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
      </FlowbiteModalBody>
    );
  },
);

export default ModalBody;
