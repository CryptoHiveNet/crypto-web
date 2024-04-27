import { Table as FlowbiteTable } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTableProps } from '@/types/types/components/table';

const Table = forwardRef<any, iTableProps>(
  (
    {
      id,
      striped,
      hoverable,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTableProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTable
        id={id}
        striped={striped}
        hoverable={hoverable}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteTable>
    );
  },
);

export default Table;
