import { FooterIcon as FlowbiteFooterIcon } from 'flowbite-react';
import { forwardRef } from 'react';

import { FooterIconProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const FooterIcon = forwardRef<any, FooterIconProps>(
  (
    {
      id,
      href,
      icon,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: FooterIconProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterIcon
        id={id}
        href={href}
        icon={icon}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default FooterIcon;
