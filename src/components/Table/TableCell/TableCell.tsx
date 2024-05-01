import { TableCell as FlowbiteTableCell } from 'flowbite-react';
import { forwardRef } from 'react';

import { TableCellProps } from '@/types/types/components/table';

const TableCell = forwardRef<any, TableCellProps>(
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
    }: TableCellProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTableCell
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
      </FlowbiteTableCell>
    );
  },
);

export default TableCell;
