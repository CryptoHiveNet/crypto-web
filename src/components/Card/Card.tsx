import { Card as FlowbiteCard } from 'flowbite-react';
import { forwardRef } from 'react';

import { CardProps } from '@/types/types/components/card';

const Card = forwardRef<any, CardProps>(
  (
    {
      id,
      href,
      imgAlt,
      imgSrc,
      renderImage,
      horizontal,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: CardProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteCard
        id={id}
        href={href}
        imgAlt={imgAlt}
        imgSrc={imgSrc}
        renderImage={undefined} // Fix: Set renderImage prop to undefined
        horizontal={horizontal}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteCard>
    );
  },
);

export default Card;
