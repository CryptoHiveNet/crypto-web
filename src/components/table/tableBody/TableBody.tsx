import { TableBody as FlowbiteTableBody } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTableBodyProps } from '@/types/types/components/table';

const TableBody = forwardRef<any, iTableBodyProps>(
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
    }: iTableBodyProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTableBody
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
      </FlowbiteTableBody>
    );
  },
);

export default TableBody;
