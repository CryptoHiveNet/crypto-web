import { fireEvent, render, screen } from '@testing-library/react';

import Progress from './Progress';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-progress',
    className: 'custom-progress',
    progress: 50,
    textLabel: '50%',
    size: 'md',
    labelProgress: true,
    labelText: 'Progress:',
    progressLabelPosition: 'bottom',
    textLabelPosition: 'right',
    color: 'blue',
    testId: 'test-progress',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Progress component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Progress component with required props', () => {
        render(<Progress {...mockProps} />);
        const progressComponent = screen.getByTestId('test-progress');
        expect(progressComponent).toBeInTheDocument();
        expect(progressComponent).toHaveAttribute('aria-valuenow', '50');
    });

    it('should handle onClick event', () => {
        render(<Progress {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-progress'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Progress {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-progress'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Progress {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-progress'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
