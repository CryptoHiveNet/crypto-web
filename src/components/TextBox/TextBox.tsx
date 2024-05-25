'use client';
import { forwardRef } from 'react';

import { Label, TextInput } from 'flowbite-react';

import Icon from '@/types/modules/shared/components/Icon/Icon';
import { TextBoxProps } from '@/types/shared/types/components/textBox';

// eslint-disable-next-line react/display-name
const TextBox = forwardRef<any, TextBoxProps>(
    (
        {
            id,
            name,
            type,
            sizing,
            className,
            labelText,
            placeholder,
            shadow,
            required,
            disabled,
            value,
            icon,
            rightIcon,
            color,
            helperText,
            addon,
            testId,
            autoComplete,
            errorMessage,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: TextBoxProps,
        ref: React.Ref<any> | null,
    ) => {
        const iconComponent = icon ? () => <Icon name={icon} /> : undefined;
        const rightIconComponent = rightIcon
            ? () => <Icon name={rightIcon} />
            : undefined;
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
                <TextInput
                    id={id}
                    name={name}
                    type={type}
                    sizing={sizing}
                    className={className}
                    placeholder={placeholder}
                    shadow={shadow}
                    color={errorMessage ? 'failure' : color}
                    helperText={errorMessage ? errorMessage : helperText}
                    addon={addon}
                    value={value}
                    icon={iconComponent}
                    rightIcon={rightIconComponent}
                    required={required}
                    disabled={disabled}
                    data-testid={testId}
                    autoComplete={autoComplete}
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

export default TextBox;
