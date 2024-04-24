<<<<<<< HEAD:src/shared/types/components/rating.ts
export type RatingProps = {
=======
export type iRatingProps = {
>>>>>>> 62a4e96 (feat: added rating component and sub components and their unit tests):src/types/components/rating.ts
  id?: string;
  className?: string;
  children: React.ReactNode;
  size?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
<<<<<<< HEAD:src/shared/types/components/rating.ts
export type RatingStarProps = {
=======
export type iRatingStarProps = {
>>>>>>> 62a4e96 (feat: added rating component and sub components and their unit tests):src/types/components/rating.ts
  id?: string;
  filled?: boolean;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
<<<<<<< HEAD:src/shared/types/components/rating.ts
export type RatingAdvancedProps = {
=======
export type iRatingAdvancedProps = {
>>>>>>> 62a4e96 (feat: added rating component and sub components and their unit tests):src/types/components/rating.ts
  id?: string;
  percentFilled: number;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
