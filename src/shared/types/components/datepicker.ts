export type DatepickerProps = {
    id?: string;
    name: string;
    language?: string;
    labelTodayButton?: string;
    labelClearButton?: string;
    minDate?: Date;
    maxDate?: Date;
    weekStart?: number;
    autoHide?: boolean;
    title?: string;
    inline?: boolean;
    className?: string;
    labelText?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
