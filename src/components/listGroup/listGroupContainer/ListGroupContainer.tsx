'use client';
import { ListGroup } from 'flowbite-react';
import { forwardRef } from 'react';

import { iListGroupContainerProps } from '@/types/types/components/listGroup';

const ListGroupContainer = forwardRef<any, iListGroupContainerProps>(
  (
    {
      children,
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iListGroupContainerProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <ListGroup
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
      </ListGroup>
    );
  },
);

export default ListGroupContainer;
