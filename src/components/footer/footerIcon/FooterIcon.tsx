import { FooterIcon as FlowbiteFooterIcon } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFooterIconProps } from '@/types/types/components/footer';

const FooterIcon = forwardRef<any, iFooterIconProps>(
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
    }: iFooterIconProps,
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
