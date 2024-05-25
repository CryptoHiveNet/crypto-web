import { forwardRef } from 'react';

import { Datepicker as FlowbiteDatepicker, Label } from 'flowbite-react';

import { DatepickerProps } from '@/types/shared/types/components/datepicker';

// eslint-disable-next-line react/display-name
const Datepicker = forwardRef<any, DatepickerProps>(
    (
        {
            id,
            name,
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
            labelText,
            errorMessage,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: DatepickerProps,
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
                <FlowbiteDatepicker
                    id={id}
                    color={errorMessage && 'failure'}
                    name={name}
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
            </>
        );
    },
);

export default Datepicker;
