import { FooterBrand as FlowbiteFooterBrand } from 'flowbite-react';
import { forwardRef } from 'react';

import { FooterBrandProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const FooterBrand = forwardRef<any, FooterBrandProps>(
  (
    {
      id,
      className,
      href,
      src,
      alt,
      name,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: FooterBrandProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteFooterBrand
        id={id}
        className={className}
        href={href}
        src={src}
        alt={alt}
        name={name}
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

export default FooterBrand;
