import { fireEvent, render, screen } from '@testing-library/react';

import FooterLink from './FooterLink';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    href: '#home',
    testId: 'test-footer-link',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};
const children = 'Home';
describe('FooterLink component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterLink component with required props', () => {
        render(<FooterLink {...mockProps}>{children}</FooterLink>);
        expect(screen.getByTestId('test-footer-link')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<FooterLink {...mockProps}>{children}</FooterLink>);
        fireEvent.click(screen.getByTestId('test-footer-link'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<FooterLink {...mockProps}>{children}</FooterLink>);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<FooterLink {...mockProps}>{children}</FooterLink>);
        fireEvent.mouseEnter(screen.getByTestId('test-footer-link'));
        fireEvent.mouseLeave(screen.getByTestId('test-footer-link'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
