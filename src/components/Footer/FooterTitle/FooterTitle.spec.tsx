import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterTitle from './FooterTitle';

describe('FooterTitle component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        title: 'Footer Title',
        testId: 'test-footer-title',
        onClick: onClickMock,
    };
    const { getByTestId, getByText } = render(<FooterTitle {...mockProps} />);
    it('should render FooterTitle component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-title')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer-title'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render title', () => {
        waitFor(() => {
            expect(getByText('Footer Title')).toBeInTheDocument();
        });
    });
});
