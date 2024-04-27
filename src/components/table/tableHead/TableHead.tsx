import { TableHead as FlowbiteTableHead } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTableHeadProps } from '@/types/types/components/table';

const TableHead = forwardRef<any, iTableHeadProps>(
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
    }: iTableHeadProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTableHead
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
      </FlowbiteTableHead>
    );
  },
);

export default TableHead;
