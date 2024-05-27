import { fireEvent, render, screen } from '@testing-library/react';

import FooterCopyright from './FooterCopyright';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    href: '#',
    by: 'John Doe',
    year: '2024',
    testId: 'test-footer-copyright',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};

describe('FooterCopyright component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterCopyright component with required props', () => {
        render(<FooterCopyright {...mockProps} />);
        expect(screen.getByTestId('test-footer-copyright')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<FooterCopyright {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-footer-copyright'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render by and year', () => {
        render(<FooterCopyright {...mockProps} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
        render(<FooterCopyright {...mockProps} />);
        expect(screen.getByTestId('test-footer-copyright')).toHaveClass(
            'test-class',
        );
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<FooterCopyright {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-footer-copyright'));
        fireEvent.mouseLeave(screen.getByTestId('test-footer-copyright'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
