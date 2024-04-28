import { Datepicker as FlowbiteDatepicker } from 'flowbite-react';
import { forwardRef } from 'react';

import { iDatepickerProps } from '@/types/types/components/datepicker';

const Datepicker = forwardRef<any, iDatepickerProps>(
  (
    {
      id,
      language,
      labelTodayButton,
      labelClearButton,
      minDate,
      maxDate,
      weekStart,
      autoHide,
      title,
      inline,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iDatepickerProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteDatepicker
        id={id}
        language={language}
        labelTodayButton={labelTodayButton}
        labelClearButton={labelClearButton}
        minDate={minDate}
        maxDate={maxDate}
        weekStart={weekStart}
        autoHide={autoHide}
        title={title}
        inline={inline}
        className={className}
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

export default Datepicker;
