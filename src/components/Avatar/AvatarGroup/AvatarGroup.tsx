import { AvatarGroup as FlowbiteAvatarGroup } from 'flowbite-react';
import { forwardRef } from 'react';

import { iAvatarGroupProps } from '@/types/types/components/avatar';

const AvatarGroup = forwardRef<any, iAvatarGroupProps>(
  (
    {
      id,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iAvatarGroupProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteAvatarGroup
        id={id}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteAvatarGroup>
    );
  },
);

export default AvatarGroup;
