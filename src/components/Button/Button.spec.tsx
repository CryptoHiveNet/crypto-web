import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

const handleClick = jest.fn();
const onMouseLeaveMock = jest.fn();
const onMouseEnterMock = jest.fn();

const props = {
    id: 'test-id',
    color: 'blue',
    outline: true,
    size: 'lg',
    label: 'test-label',
    isProcessing: false,
    processingSpinner: <div data-testid="spinner">Spinner</div>,
    pill: true,
    disabled: false,
    className: 'test-class',
    testId: 'my-button-test-id',
    onClick: handleClick,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Button component tests', () => {
    beforeEach(() => {
        handleClick.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });

    it('renders Button component with required props', async () => {
        render(<Button {...props}>{test_children_text}</Button>);
        const buttonComponent = screen.getByTestId(props.testId);
        expect(buttonComponent).toBeInTheDocument();
        expect(buttonComponent).toHaveAttribute('id', props.id);
        expect(buttonComponent).toHaveClass(props.className);

        expect(buttonComponent).toHaveClass('bg-blue-700');

        expect(buttonComponent.querySelector('span')).toHaveClass(
            'border border-transparent',
        );
    });

    it('renders children correctly', () => {
        render(<Button {...props}>{test_children_text}</Button>);
        expect(screen.getByText(test_children_text)).toBeInTheDocument();
    });

    it('executes onClick handler when clicked', () => {
        render(<Button {...props}>{test_children_text}</Button>);
        const buttonComponent = screen.getByText(test_children_text);

        fireEvent.click(buttonComponent);
        fireEvent.click(buttonComponent);
        expect(handleClick).toHaveBeenCalledTimes(2);
    });

    it('renders as disabled when disabled prop is true', () => {
        render(
            <Button
                {...props}
                disabled={true}
            >
                Disabled Button
            </Button>,
        );
        const buttonComponent = screen
            .getByText('Disabled Button')
            .closest('button');
        expect(buttonComponent).toBeDisabled();
    });

    it('renders a processing spinner when isProcessing prop is true', () => {
        render(
            <Button
                {...props}
                isProcessing={true}
            >
                Submit
            </Button>,
        );
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('should call onMouseEnter when mouse enters', () => {
        render(<Button {...props}>{test_children_text}</Button>);
        const buttonComponent = screen.getByTestId(props.testId);

        fireEvent.mouseEnter(buttonComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should call onMouseLeave when mouse leaves', () => {
        render(<Button {...props}>{test_children_text}</Button>);
        const buttonComponent = screen.getByTestId(props.testId);

        fireEvent.mouseLeave(buttonComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should pass other props down correctly', () => {
        const otherProps = { 'aria-label': 'button' };
        render(
            <Button
                {...props}
                {...otherProps}
            >
                {test_children_text}
            </Button>,
        );
        const buttonComponent = screen.getByTestId(props.testId);

        expect(buttonComponent).toHaveAttribute('aria-label', 'button');
    });
});
