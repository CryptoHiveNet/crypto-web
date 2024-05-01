'use client';
import { ListGroup } from 'flowbite-react';
import { forwardRef } from 'react';

import { iListGroupItemProps } from '@/types/shared/types/components/listGroup';

const ListGroupItem = forwardRef<any, iListGroupItemProps>(
  (
    {
      children,
      id,
      className,
      disabled,
      href,
      active,
      icon,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iListGroupItemProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <ListGroup.Item
        id={id}
        className={className}
        disabled={disabled}
        href={href}
        active={active}
        icon={icon}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </ListGroup.Item>
    );
  },
);

export default ListGroupItem;
