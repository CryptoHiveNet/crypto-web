import { TableHeadCell as FlowbiteTableHeadCell } from 'flowbite-react';
import { forwardRef } from 'react';

import { TableHeadCellProps } from '@/types/types/components/table';

const TableHeadCell = forwardRef<any, TableHeadCellProps>(
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
    }: TableHeadCellProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTableHeadCell
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
      </FlowbiteTableHeadCell>
    );
  },
);

export default TableHeadCell;
