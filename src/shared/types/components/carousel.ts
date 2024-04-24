import { ReactNode } from 'react';

<<<<<<< HEAD:src/shared/types/components/carousel.ts
export type CarouselProps = {
=======
export type iCarouselProps = {
>>>>>>> 5cfdb47 (feat: added carousel component and it unit tests):src/types/components/carousel.ts
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
