export type iRatingProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  size?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iRatingStarProps = {
  id?: string;
  filled?: boolean;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iRatingAdvancedProps = {
  id?: string;
  percentFilled: number;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
