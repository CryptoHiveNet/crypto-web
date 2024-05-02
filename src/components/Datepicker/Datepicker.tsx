import { Datepicker as FlowbiteDatepicker } from 'flowbite-react';
import { forwardRef } from 'react';

import { DatepickerProps } from '@/types/shared/types/components/datepicker';

// eslint-disable-next-line react/display-name
const Datepicker = forwardRef<any, DatepickerProps>(
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
    }: DatepickerProps,
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
        // ref={ref}
        {...rest}
      />
    );
  },
);

export default Datepicker;
