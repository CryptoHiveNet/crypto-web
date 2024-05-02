import { SidebarLogo as FlowbiteSidebarLogo } from 'flowbite-react';
import { forwardRef } from 'react';

import { SidebarLogoProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const SidebarLogo = forwardRef<any, SidebarLogoProps>(
  (
    {
      id,
      href,
      img,
      imgAlt,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: SidebarLogoProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarLogo
        id={id}
        href={href}
        img={img}
        imgAlt={imgAlt}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteSidebarLogo>
    );
  },
);

export default SidebarLogo;
