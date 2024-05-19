import { fireEvent, render, screen } from '@testing-library/react';

import Banner from './Banner';

const testChildrenText = 'Test Children';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'test-class',
    testId: 'test-banner',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Banner component unit tests', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });

    it('should render Banner component with all props', () => {
        render(<Banner {...mockProps}>{testChildrenText}</Banner>);
        const bannerComponent = screen.getByTestId('test-banner');

        expect(bannerComponent).toBeInTheDocument();
        expect(bannerComponent).toHaveAttribute('id', 'test-id');
        expect(bannerComponent).toHaveClass('test-class');
        expect(bannerComponent).toHaveAttribute('data-testid', 'test-banner');
    });

    it('should handle onClick event', () => {
        render(<Banner {...mockProps}>{testChildrenText}</Banner>);
        const bannerComponent = screen.getByTestId('test-banner');
        fireEvent.click(bannerComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Banner {...mockProps}>{testChildrenText}</Banner>);
        const bannerComponent = screen.getByTestId('test-banner');
        fireEvent.mouseEnter(bannerComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Banner {...mockProps}>{testChildrenText}</Banner>);
        const bannerComponent = screen.getByTestId('test-banner');
        fireEvent.mouseLeave(bannerComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<Banner {...mockProps}>{testChildrenText}</Banner>);
        expect(screen.getByText(testChildrenText)).toBeInTheDocument();
    });
});
