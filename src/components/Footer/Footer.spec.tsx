import { fireEvent, render, screen } from '@testing-library/react';

import Footer from './Footer';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'test-class',
    container: true,
    bgDark: false,
    testId: 'test-footer',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

const mockChildren = (
    <>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
    </>
);

describe('Footer component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render Footer component with required props', () => {
        render(<Footer {...mockProps}>{mockChildren}</Footer>);

        const footerComponent = screen.getByTestId('test-footer');

        expect(footerComponent).toBeInTheDocument();
        expect(footerComponent).toHaveClass('test-class');
    });

    it('should handle onClick event', () => {
        render(<Footer {...mockProps}>{mockChildren}</Footer>);

        fireEvent.click(screen.getByTestId('test-footer'));

        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<Footer {...mockProps}>{mockChildren}</Footer>);

        expect(screen.getByText('Contact Us')).toBeInTheDocument();
        expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    });

    it('should handle onMouseEnter event', () => {
        render(<Footer {...mockProps}>{mockChildren}</Footer>);

        fireEvent.mouseEnter(screen.getByTestId('test-footer'));

        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Footer {...mockProps}>{mockChildren}</Footer>);

        fireEvent.mouseLeave(screen.getByTestId('test-footer'));

        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
