'use client';
import { forwardRef } from 'react';

import { Checkbox as CHB } from 'flowbite-react';

import { CheckBoxProps } from '@/types/shared/types/components/checkBox';

// eslint-disable-next-line react/display-name
const CheckBox = forwardRef<any, CheckBoxProps>(
    (
        {
            id,
            className,
            defaultChecked,
            disabled,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: CheckBoxProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <CHB
                id={id}
                className={className}
                defaultChecked={defaultChecked}
                disabled={disabled}
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

export default CheckBox;
