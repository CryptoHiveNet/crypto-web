import { Pagination as FlowbitePagination } from 'flowbite-react';
import { forwardRef } from 'react';

import { iPaginationProps } from '@/types/types/components/pagination';

const Pagination = forwardRef<any, iPaginationProps>(
  (
    {
      id,
      className,
      currentPage,
      totalPages,
      onPageChange,
      showIcons,
      layout,
      previousLabel,
      nextLabel,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iPaginationProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbitePagination
        id={id}
        className={className}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons={showIcons}
        layout={layout}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default Pagination;
