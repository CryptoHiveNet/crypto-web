export type SelectBoxProps = {
    id?: string;
    name?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    labelText?: string;
    options: { value: string; label: string }[];
    errorMessage?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
