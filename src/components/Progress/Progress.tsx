import { Progress as FlowbiteProgress } from 'flowbite-react';
import { forwardRef } from 'react';

import { iProgressProps } from '@/types/types/components/progress';

const Progress = forwardRef<any, iProgressProps>(
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
    }: iProgressProps,
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
