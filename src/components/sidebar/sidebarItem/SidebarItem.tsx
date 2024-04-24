import { SidebarItem as FlowbiteSidebarItem } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarItemProps } from '@/types/types/components/sidebar';

const SidebarItem = forwardRef<any, iSidebarItemProps>(
  (
    {
      id,
      href,
      icon,
      label,
      labelColor,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iSidebarItemProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarItem
        id={id}
        href={href}
        icon={icon}
        label={label}
        labelColor={labelColor}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteSidebarItem>
    );
  },
);

export default SidebarItem;
