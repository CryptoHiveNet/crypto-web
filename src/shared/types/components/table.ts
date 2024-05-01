import { ReactNode } from 'react';

export type TableProps = {
  id?: string;
  striped?: boolean;
  hoverable?: boolean;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type TableHeadProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type TableHeadCellProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type TableBodyProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type TableRowProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type TableCellProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
