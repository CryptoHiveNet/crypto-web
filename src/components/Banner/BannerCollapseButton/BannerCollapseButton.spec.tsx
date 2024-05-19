import { fireEvent, render, screen } from '@testing-library/react';

import BannerCollapseButton from './BannerCollapseButton';

const mockChildren = <div>Test Children</div>;
const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    color: 'red',
    className: 'test-class',
    testId: 'test-banner-collapse-button',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: mockChildren,
};

describe('BannerCollapseButton component', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });
    it('should render BannerCollapseButton component with required props', () => {
        render(<BannerCollapseButton {...mockProps} />);
        const bannerCollapseButton = screen.getByTestId(
            'test-banner-collapse-button',
        );

        expect(bannerCollapseButton).toBeInTheDocument();
        expect(bannerCollapseButton).toHaveAttribute('id', 'test-id');
        expect(bannerCollapseButton).toHaveClass('test-class');
        expect(bannerCollapseButton).toHaveTextContent('Test Children');
    });

    it('should handle onClick event', () => {
        render(<BannerCollapseButton {...mockProps} />);
        const bannerCollapseButton = screen.getByTestId(
            'test-banner-collapse-button',
        );
        fireEvent.click(bannerCollapseButton);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<BannerCollapseButton {...mockProps} />);
        const bannerCollapseButton = screen.getByTestId(
            'test-banner-collapse-button',
        );
        fireEvent.mouseEnter(bannerCollapseButton);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<BannerCollapseButton {...mockProps} />);
        const bannerCollapseButton = screen.getByTestId(
            'test-banner-collapse-button',
        );
        fireEvent.mouseLeave(bannerCollapseButton);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
