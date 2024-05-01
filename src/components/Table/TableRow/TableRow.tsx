import { TableRow as FlowbiteTableRow } from 'flowbite-react';
import { forwardRef } from 'react';

import { TableRowProps } from '@/types/types/components/table';

const TableRow = forwardRef<any, TableRowProps>(
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
    }: TableRowProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTableRow
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
      </FlowbiteTableRow>
    );
  },
);

export default TableRow;
