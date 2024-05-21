'use client';
import { forwardRef } from 'react';

import { TextInput } from 'flowbite-react';

import Icon from '@/types/modules/shared/components/Icon/Icon';
import { TextBoxProps } from '@/types/shared/types/components/textBox';

// eslint-disable-next-line react/display-name
const TextBox = forwardRef<any, TextBoxProps>(
    (
        {
            id,
            type,
            sizing,
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
            <TextInput
                id={id}
                type={type}
                sizing={sizing}
                placeholder={placeholder}
                shadow={shadow}
                color={color}
                helperText={helperText}
                addon={addon}
                value={value}
                icon={iconComponent}
                rightIcon={rightIconComponent}
                required={required}
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

export default TextBox;
