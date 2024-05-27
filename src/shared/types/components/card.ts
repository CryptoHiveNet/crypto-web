export type CardProps = {
  id?: string;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
  renderImage?: () => void;
  horizontal?: boolean;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
