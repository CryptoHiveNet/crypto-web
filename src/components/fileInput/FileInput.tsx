'use client';
import { FileInput as FLI } from 'flowbite-react';
import { forwardRef } from 'react';

import { iFileInputProps } from '@/types/shared/types/components/fileInput';

const FileInput = forwardRef<any, iFileInputProps>(
  (
    {
      id,
      className,
      helperText,
      multiple,
      sizing,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iFileInputProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FLI
        id={id}
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
