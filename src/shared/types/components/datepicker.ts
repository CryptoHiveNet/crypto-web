export type DatepickerProps = {
  id?: string;
  language?: string;
  labelTodayButton?: string;
  labelClearButton?: string;
  minDate?: Date;
  maxDate?: Date;
  weekStart?: number;
  autoHide?: boolean;
  title?: string;
  inline?: boolean;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
