import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterLinkGroup from './FooterLinkGroup';

describe('FooterLinkGroup component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        col: 3,
        testId: 'test-footer-link-group',
        onClick: onClickMock,
    };
    const mockChildren = (
        <>
            <div>Group 1</div>
            <div>Group 2</div>
        </>
    );
    const { getByTestId, getByText } = render(
        <FooterLinkGroup {...mockProps}>{mockChildren}</FooterLinkGroup>,
    );
    it('should render FooterLinkGroup component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-link-group')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer-link-group'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        waitFor(() => {
            expect(getByText('Group 1')).toBeInTheDocument();
            expect(getByText('Group 2')).toBeInTheDocument();
        });
    });
});
