import { TableHead as FlowbiteTableHead } from 'flowbite-react';
import { forwardRef } from 'react';

import { TableHeadProps } from '@/types/types/components/table';

const TableHead = forwardRef<any, TableHeadProps>(
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
    }: TableHeadProps,
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
