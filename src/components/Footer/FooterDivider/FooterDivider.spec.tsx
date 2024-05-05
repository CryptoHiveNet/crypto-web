import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterDivider from './FooterDivider';

describe('FooterDivider component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        testId: 'test-footer-divider',
        onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterDivider {...mockProps} />);
    it('should render FooterDivider component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-divider')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer-divider'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
});
