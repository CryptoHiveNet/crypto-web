import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterBrand from './FooterBrand';

describe('FooterBrand component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        href: '#',
        src: 'logo.png',
        alt: 'Logo',
        name: 'My Brand',
        testId: 'test-footer-brand',
        onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterBrand {...mockProps} />);
    it('should render FooterBrand component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-brand')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer-brand'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render href, src, alt, and name', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-brand')).toHaveAttribute(
                'href',
                '#',
            );
            expect(getByTestId('test-footer-brand')).toHaveAttribute(
                'src',
                'logo.png',
            );
            expect(getByTestId('test-footer-brand')).toHaveAttribute(
                'alt',
                'Logo',
            );
            expect(getByTestId('test-footer-brand')).toHaveTextContent(
                'My Brand',
            );
        });
    });
});
