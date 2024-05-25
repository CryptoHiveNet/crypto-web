'use client';
import { forwardRef } from 'react';

import { Label, Select } from 'flowbite-react';

import { SelectBoxProps } from '@/types/shared/types/components/selectBox';

// eslint-disable-next-line react/display-name
const SelectBox = forwardRef<any, SelectBoxProps>(
    (
        {
            id,
            name,
            className,
            required,
            disabled,
            labelText,
            options,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: SelectBoxProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <>
                <div className="mb-2 block">
                    <Label
                        htmlFor={id}
                        value={labelText}
                    />
                </div>
                <Select
                    id={id}
                    name={name}
                    className={className}
                    required={required}
                    disabled={disabled}
                    data-testid={testId}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    ref={ref}
                    {...rest}
                >
                    {options.map((option, index) => (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </Select>
            </>
        );
    },
);

export default SelectBox;
