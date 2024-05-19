import { fireEvent, render, screen } from '@testing-library/react';

import FooterDivider from './FooterDivider';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    testId: 'test-footer-divider',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};

describe('FooterDivider component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterDivider component with required props', () => {
        render(<FooterDivider {...mockProps} />);
        expect(screen.getByTestId('test-footer-divider')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<FooterDivider {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-footer-divider'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should apply className prop', () => {
        render(<FooterDivider {...mockProps} />);
        expect(screen.getByTestId('test-footer-divider')).toHaveClass(
            'test-class',
        );
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<FooterDivider {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-footer-divider'));
        fireEvent.mouseLeave(screen.getByTestId('test-footer-divider'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
