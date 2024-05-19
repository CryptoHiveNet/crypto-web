import { fireEvent, render, screen } from '@testing-library/react';

import FooterBrand from './FooterBrand';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    href: '#',
    src: 'logo.png',
    alt: 'Logo',
    name: 'My Brand',
    testId: 'test-footer-brand',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};

describe('FooterBrand component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterBrand component with required props', () => {
        render(<FooterBrand {...mockProps} />);
        expect(screen.getByTestId('test-footer-brand')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<FooterBrand {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-footer-brand'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render href, src, alt, and name', () => {
        render(<FooterBrand {...mockProps} />);
        expect(screen.getByTestId('test-footer-brand')).toHaveAttribute(
            'href',
            '#',
        );
        expect(
            screen.getByTestId('test-footer-brand').querySelector('img'),
        ).toHaveAttribute('src', 'logo.png');
        expect(
            screen.getByTestId('test-footer-brand').querySelector('img'),
        ).toHaveAttribute('alt', 'Logo');
        expect(screen.getByTestId('test-footer-brand')).toHaveTextContent(
            'My Brand',
        );
    });

    it('should apply className prop', () => {
        render(<FooterBrand {...mockProps} />);
        expect(screen.getByTestId('test-footer-brand')).toHaveClass(
            'test-class',
        );
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<FooterBrand {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-footer-brand'));
        fireEvent.mouseLeave(screen.getByTestId('test-footer-brand'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
