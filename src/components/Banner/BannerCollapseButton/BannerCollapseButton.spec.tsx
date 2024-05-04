import { fireEvent, render, waitFor } from '@testing-library/react';

import BannerCollapseButton from './BannerCollapseButton';

describe('BannerCollapseButton component', () => {
    it('should render BannerCollapseButton component with required props', () => {
        const mockProps = {
            id: 'test-id',
            color: 'red',
            testId: 'test-banner-collapse-button',
        };
        const { getByTestId } = render(<BannerCollapseButton {...mockProps} />);
        waitFor(() => {
            expect(
                getByTestId('test-banner-collapse-button'),
            ).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        const onClickMock = jest.fn();
        const mockProps = {
            onClick: onClickMock,
        };
        const { getByTestId } = render(<BannerCollapseButton {...mockProps} />);
        waitFor(() => {
            fireEvent.click(getByTestId('test-banner-collapse-button'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        const mockChildren = <div>Test Children</div>;
        const { getByText } = render(
            <BannerCollapseButton>{mockChildren}</BannerCollapseButton>,
        );
        waitFor(() => {
            expect(getByText('Test Children')).toBeInTheDocument();
        });
    });
});
