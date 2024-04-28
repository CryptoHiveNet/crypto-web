import { SidebarLogo as FlowbiteSidebarLogo } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarLogoProps } from '@/types/types/components/sidebar';

const SidebarLogo = forwardRef<any, iSidebarLogoProps>(
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
    }: iSidebarLogoProps,
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
