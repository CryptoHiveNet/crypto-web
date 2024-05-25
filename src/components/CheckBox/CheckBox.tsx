'use client';
import { forwardRef } from 'react';

import { Checkbox as CHB, Label } from 'flowbite-react';

import { CheckBoxProps } from '@/types/shared/types/components/checkBox';

// eslint-disable-next-line react/display-name
const CheckBox = forwardRef<any, CheckBoxProps>(
    (
        {
            id,
            labelText,
            errorMessage,
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
            <>
                {labelText && (
                    <div className="mb-2 block">
                        <Label
                            color={errorMessage && 'failure'}
                            htmlFor={id}
                            value={labelText}
                        />
                    </div>
                )}

                <CHB
                    id={id}
                    color={errorMessage && 'failure'}
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
            </>
        );
    },
);

export default CheckBox;
