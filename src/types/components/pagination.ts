export type iPaginationProps = {
  id?: string;
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showIcons?: boolean;
  layout?: 'table' | 'navigation' | 'pagination';
  previousLabel?: string;
  nextLabel?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
