import { fireEvent, render, screen } from '@testing-library/react';

import FooterIcon from './FooterIcon';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    href: '#home',
    icon: 'home',
    testId: 'test-footer-icon',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};

describe('FooterIcon component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterIcon component with required props', () => {
        render(<FooterIcon {...mockProps} />);
        expect(screen.getByTestId('test-footer-icon')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<FooterIcon {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-footer-icon'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should apply className prop', () => {
        render(<FooterIcon {...mockProps} />);
        expect(screen.getByTestId('test-footer-icon')).toHaveClass(
            'test-class',
        );
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<FooterIcon {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-footer-icon'));
        fireEvent.mouseLeave(screen.getByTestId('test-footer-icon'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
