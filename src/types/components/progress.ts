export type iProgressProps = {
  id?: string;
  className?: string;
  progress: number;
  textLabel?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  labelProgress?: boolean;
  labelText?: boolean;
  progressLabelPosition?: 'inside' | 'outside';
  textLabelPosition?: 'inside' | 'outside';
  color?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
