import { forwardRef } from 'react';

import { Avatar as FlowbiteAvatar } from 'flowbite-react';

import { AvatarProps } from '@/types/shared/types/components/avatar';

// eslint-disable-next-line react/display-name
const Avatar = forwardRef<any, AvatarProps>(
    (
        {
            id,
            className,
            img,
            alt,
            rounded,
            stacked,
            bordered,
            color,
            size,
            placeholderInitials,
            status,
            statusPosition,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: AvatarProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteAvatar
                id={id}
                className={className}
                img={img}
                alt={alt}
                rounded={rounded}
                stacked={stacked}
                bordered={bordered}
                color={color}
                size={size}
                placeholderInitials={placeholderInitials}
                status={status}
                statusPosition={statusPosition}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteAvatar>
        );
    },
);

export default Avatar;
