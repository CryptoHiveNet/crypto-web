import { TableRow as FlowbiteTableRow } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTableRowProps } from '@/types/types/components/table';

const TableRow = forwardRef<any, iTableRowProps>(
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
    }: iTableRowProps,
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
