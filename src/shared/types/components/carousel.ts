import { ReactNode } from 'react';

export type CarouselProps = {
  id?: string;
  className?: string;
  slide?: boolean;
  slideInterval?: number;
  leftControl?: ReactNode | string;
  rightControl?: ReactNode | string;
  indicators?: boolean;
  pauseOnHover?: boolean;
  onSlideChange?: () => void;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
