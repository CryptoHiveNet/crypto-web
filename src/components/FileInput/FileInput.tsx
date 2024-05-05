'use client';
import { forwardRef } from 'react';

import { FileInput as FLI } from 'flowbite-react';

import { FileInputProps } from '@/types/shared/types/components/fileInput';

// eslint-disable-next-line react/display-name
const FileInput = forwardRef<any, FileInputProps>(
    (
        {
            id,
            name,
            className,
            helperText,
            multiple,
            sizing,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: FileInputProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FLI
                id={id}
                name={name}
                className={className}
                helperText={helperText}
                multiple={multiple}
                sizing={sizing}
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

export default FileInput;
