import {
  TableBodyProps,
  TableCellProps,
  TableHeadCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iTableProps = TableProps & UserReactionProps & BaseProps;
export type iTableHeadProps = TableHeadProps & UserReactionProps & BaseProps;
export type iTableHeadCellProps = TableHeadCellProps &
  UserReactionProps &
  BaseProps;
export type iTableBodyProps = TableBodyProps & UserReactionProps & BaseProps;
export type iTableRowProps = TableRowProps & UserReactionProps & BaseProps;
export type iTableCellProps = TableCellProps & UserReactionProps & BaseProps;
