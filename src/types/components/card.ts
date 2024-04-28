export type iCardProps = {
  id?: string;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
  renderImage?: any;
  horizontal?: boolean;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
