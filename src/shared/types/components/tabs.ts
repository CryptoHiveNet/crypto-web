import { TabStyles } from 'flowbite-react';
import { FC, SVGProps } from 'react';

export type TabsProps = {
  id?: string;
  ariaLabel?: string;
  onActiveTabChange?: () => void;
  style?: keyof TabStyles;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type TabsItemProps = {
  id?: string;
  active?: boolean;
  disabled?: boolean;
  title?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
