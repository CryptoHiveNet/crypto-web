import { FooterBrand as FlowbiteFooterBrand } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFooterBrandProps } from '@/types/types/components/footer';

const FooterBrand = forwardRef<any, iFooterBrandProps>(
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
    }: iFooterBrandProps,
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
