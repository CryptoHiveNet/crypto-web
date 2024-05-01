import { Progress as FlowbiteProgress } from 'flowbite-react';
import { forwardRef } from 'react';

import { ProgressProps } from '@/types/types/components/progress';

const Progress = forwardRef<any, ProgressProps>(
  (
    {
      id,
      className,
      progress,
      textLabel,
      size,
      labelProgress,
      labelText,
      progressLabelPosition,
      textLabelPosition,
      color,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: ProgressProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteProgress
        id={id}
        className={className}
        progress={progress}
        textLabel={textLabel}
        size={size}
        labelProgress={labelProgress}
        labelText={labelText}
        progressLabelPosition={progressLabelPosition}
        textLabelPosition={textLabelPosition}
        color={color}
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

export default Progress;
