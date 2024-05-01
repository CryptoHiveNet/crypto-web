export type RatingProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  size?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type RatingStarProps = {
  id?: string;
  filled?: boolean;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type RatingAdvancedProps = {
  id?: string;
  percentFilled: number;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
