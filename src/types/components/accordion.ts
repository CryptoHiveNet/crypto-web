import { ReactNode } from 'react';

export type iAccordionProps = {
  id?: string;
  collapseAll?: boolean;
  className?: string;
  children: any;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iAccordionItemProps = {
  id?: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  title: string;
  content: ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
