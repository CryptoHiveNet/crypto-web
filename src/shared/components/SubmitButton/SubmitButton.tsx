import Button from '@/types/components/Button/Button';

const SubmitButton = ({
    text,
    ...props
}: {
    text: string;
    [key: string]: any;
}) => (
    <Button
        type="submit"
        color="blue"
        {...props}
    >
        {text}
    </Button>
);
export default SubmitButton;
