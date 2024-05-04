import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterLink from './FooterLink';

describe('FooterLink component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        href: '#home',
        testId: 'test-footer-link',
        onClick: onClickMock,
    };
    const mockChildren = 'Home';
    const { getByTestId, getByText } = render(
        <FooterLink {...mockProps}>{mockChildren}</FooterLink>,
    );
    it('should render FooterLink component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-link')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer-link'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        waitFor(() => {
            expect(getByText('Home')).toBeInTheDocument();
        });
    });
});
