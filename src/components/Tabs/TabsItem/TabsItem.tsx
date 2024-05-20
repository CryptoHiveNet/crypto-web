import { forwardRef } from 'react';

import { Tabs as FlowbiteTabs } from 'flowbite-react';

import { TabsItemProps } from '@/types/shared/types/components/tabs';

// eslint-disable-next-line react/display-name
const TabsItem = forwardRef<any, TabsItemProps>(
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
            ...rest
        }: TabsItemProps,
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
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteTabs.Item>
        );
    },
);

export default TabsItem;
