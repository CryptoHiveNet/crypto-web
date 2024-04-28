import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup component unit tests', () => {
    const onClickMock = jest.fn();
    const onMouseEnterMock = jest.fn();
    const onMouseLeaveMock = jest.fn();

    const { getByTestId, getByText, container } = render(
        <ButtonGroup
            onClick={onClickMock}
            className="custom-class"
            testId="my-buttons"
            onMouseEnter={onMouseEnterMock}
            onMouseLeave={onMouseLeaveMock}
        >
            <Button>{`${test_children_text} 1`}</Button>
            <Button>{`${test_children_text} 2`}</Button>
            <Button>{`${test_children_text} 3`}</Button>
        </ButtonGroup>,
    );
    const childButtonOne = getByText(`${test_children_text} 1`);
    const childButtonTwo = getByText(`${test_children_text} 2`);
    const childButtonThree = getByText(`${test_children_text} 3`);
    const buttonGroup = container.querySelector('.custom-class');
    const buttonGroupsComponent = getByTestId('my-buttons');

    it('renders children correctly', () => {
        expect(childButtonOne).toBeInTheDocument();
        expect(childButtonTwo).toBeInTheDocument();
        expect(childButtonThree).toBeInTheDocument();
    });

    it('calls onClick function when any button in the group is clicked', () => {
        fireEvent.click(childButtonOne);
        fireEvent.click(childButtonTwo);
        waitFor(() => {
            expect(onClickMock).toHaveBeenCalledTimes(2);
        });
    });

    it('applies additional class name correctly', () => {
        waitFor(() => {
            expect(buttonGroup).toBeInTheDocument();
        });
    });

    it('should call onMouseEnter when mouse enters', () => {
        fireEvent.mouseEnter(buttonGroupsComponent);

        waitFor(() => {
            expect(onMouseEnterMock).toHaveBeenCalled();
        });
    });

    it('should call onMouseLeave when mouse leaves', () => {
        fireEvent.mouseLeave(buttonGroupsComponent);
        waitFor(() => {
            expect(onMouseLeaveMock).toHaveBeenCalled();
        });
    });
});
