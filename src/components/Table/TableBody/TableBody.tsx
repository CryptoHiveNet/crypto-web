import { TableBody as FlowbiteTableBody } from 'flowbite-react';
import { forwardRef } from 'react';

import { TableBodyProps } from '@/types/shared/types/components/table';

// eslint-disable-next-line react/display-name
const TableBody = forwardRef<any, TableBodyProps>(
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
    }: TableBodyProps,
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
