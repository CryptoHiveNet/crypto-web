import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const props = {
    id: 'test-id',
    outline: true,
    className: 'custom-class',
    testId: 'my-buttons',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('ButtonGroup component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders ButtonGroup component with required props and children', () => {
        render(
            <ButtonGroup {...props}>
                <Button>{`${test_children_text} 1`}</Button>
                <Button>{`${test_children_text} 2`}</Button>
                <Button>{`${test_children_text} 3`}</Button>
            </ButtonGroup>,
        );

        const buttonGroupComponent = screen.getByTestId(props.testId);
        const childButtonOne = screen.getByText(`${test_children_text} 1`);
        const childButtonTwo = screen.getByText(`${test_children_text} 2`);
        const childButtonThree = screen.getByText(`${test_children_text} 3`);

        expect(buttonGroupComponent).toBeInTheDocument();
        expect(buttonGroupComponent).toHaveAttribute('id', props.id);
        expect(buttonGroupComponent).toHaveClass(props.className);

        expect(childButtonOne).toBeInTheDocument();
        expect(childButtonTwo).toBeInTheDocument();
        expect(childButtonThree).toBeInTheDocument();
    });

    it('calls onClick function when any button in the group is clicked', () => {
        render(
            <ButtonGroup {...props}>
                <Button>{`${test_children_text} 1`}</Button>
                <Button>{`${test_children_text} 2`}</Button>
                <Button>{`${test_children_text} 3`}</Button>
            </ButtonGroup>,
        );

        const childButtonOne = screen.getByText(`${test_children_text} 1`);
        const childButtonTwo = screen.getByText(`${test_children_text} 2`);

        fireEvent.click(childButtonOne);
        fireEvent.click(childButtonTwo);

        expect(onClickMock).toHaveBeenCalledTimes(2);
    });

    it('applies additional class name correctly', () => {
        render(
            <ButtonGroup {...props}>
                <Button>{`${test_children_text} 1`}</Button>
                <Button>{`${test_children_text} 2`}</Button>
                <Button>{`${test_children_text} 3`}</Button>
            </ButtonGroup>,
        );

        const buttonGroupComponent = screen.getByTestId(props.testId);
        expect(buttonGroupComponent).toHaveClass('custom-class');
    });

    it('should call onMouseEnter when mouse enters', () => {
        render(
            <ButtonGroup {...props}>
                <Button>{`${test_children_text} 1`}</Button>
                <Button>{`${test_children_text} 2`}</Button>
                <Button>{`${test_children_text} 3`}</Button>
            </ButtonGroup>,
        );

        const buttonGroupComponent = screen.getByTestId(props.testId);
        fireEvent.mouseEnter(buttonGroupComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should call onMouseLeave when mouse leaves', () => {
        render(
            <ButtonGroup {...props}>
                <Button>{`${test_children_text} 1`}</Button>
                <Button>{`${test_children_text} 2`}</Button>
                <Button>{`${test_children_text} 3`}</Button>
            </ButtonGroup>,
        );

        const buttonGroupComponent = screen.getByTestId(props.testId);
        fireEvent.mouseLeave(buttonGroupComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should pass other props down correctly', () => {
        const otherProps = { 'aria-label': 'button-group' };
        render(
            <ButtonGroup
                {...props}
                {...otherProps}
            >
                <Button>{`${test_children_text} 1`}</Button>
                <Button>{`${test_children_text} 2`}</Button>
                <Button>{`${test_children_text} 3`}</Button>
            </ButtonGroup>,
        );

        const buttonGroupComponent = screen.getByTestId(props.testId);
        expect(buttonGroupComponent).toHaveAttribute(
            'aria-label',
            'button-group',
        );
    });
});
