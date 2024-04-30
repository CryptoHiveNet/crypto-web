import { FlowbiteDropdownTheme } from 'flowbite-react';
import { JSXElementConstructor, ReactElement } from 'react';

export type DropdownProps = {
  id?: string;
  label?: string;
  dismissOnClick?: boolean;
  inline?: boolean;
  size?: string;
  placement?: any;
  renderTrigger?: (
    theme: FlowbiteDropdownTheme,
  ) => ReactElement<any, string | JSXElementConstructor<any>>;
  children?: string;
  className?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
