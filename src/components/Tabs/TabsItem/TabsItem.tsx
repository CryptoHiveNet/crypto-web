import { Tabs as FlowbiteTabs } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTabsItemProps } from '@/types/types/components/tabs';

const TabsItem = forwardRef<any, iTabsItemProps>(
  (
    {
      id,
      active,
      disabled,
      title,
      icon,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTabsItemProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTabs.Item
        id={id}
        active={active}
        disabled={disabled}
        title={title}
        icon={icon}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteTabs.Item>
    );
  },
);

export default TabsItem;
