import { Tabs as FlowbiteTabs } from 'flowbite-react';
import { forwardRef } from 'react';

import { TabsProps } from '@/types/shared/types/components/tabs';

// eslint-disable-next-line react/display-name
const Tabs = forwardRef<any, TabsProps>(
  (
    {
      id,
      ariaLabel,
      onActiveTabChange,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: TabsProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTabs
        id={id}
        aria-label={ariaLabel}
        onActiveTabChange={onActiveTabChange}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteTabs>
    );
  },
);

export default Tabs;
