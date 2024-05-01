import { Pagination as FlowbitePagination } from 'flowbite-react';
import { forwardRef } from 'react';

import { PaginationProps } from '@/types/types/components/pagination';

const Pagination = forwardRef<any, PaginationProps>(
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
    }: PaginationProps,
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
