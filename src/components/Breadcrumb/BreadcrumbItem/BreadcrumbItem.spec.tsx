import { fireEvent, render, screen } from '@testing-library/react';

import BreadcrumbItem from './BreadcrumbItem';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    href: '#home',
    icon: 'icon',
    className: 'test-class',
    testId: 'breadcrumb-item-test-id',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

const mockChildren = 'Test Children';

describe('BreadcrumbItem component unit tests', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });
    it('should render BreadcrumbItem component with required props', () => {
        render(<BreadcrumbItem {...mockProps}>{mockChildren}</BreadcrumbItem>);
        const breadcrumbItemComponent = screen.getByTestId(
            'breadcrumb-item-test-id',
        );
        const linkElement = breadcrumbItemComponent.querySelector('a');
        expect(breadcrumbItemComponent).toBeInTheDocument();
        expect(breadcrumbItemComponent).toHaveAttribute('id', 'test-id');
        expect(linkElement).toHaveAttribute('href', '#home');
        expect(breadcrumbItemComponent).toHaveClass('test-class');
    });

    it('should handle onClick event', () => {
        render(<BreadcrumbItem {...mockProps}>{mockChildren}</BreadcrumbItem>);
        const breadcrumbItemComponent = screen.getByTestId(
            'breadcrumb-item-test-id',
        );
        fireEvent.click(breadcrumbItemComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<BreadcrumbItem {...mockProps}>{mockChildren}</BreadcrumbItem>);
        const breadcrumbItemComponent = screen.getByTestId(
            'breadcrumb-item-test-id',
        );
        fireEvent.mouseEnter(breadcrumbItemComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<BreadcrumbItem {...mockProps}>{mockChildren}</BreadcrumbItem>);
        const breadcrumbItemComponent = screen.getByTestId(
            'breadcrumb-item-test-id',
        );
        fireEvent.mouseLeave(breadcrumbItemComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<BreadcrumbItem {...mockProps}>{mockChildren}</BreadcrumbItem>);
        expect(screen.getByText(mockChildren)).toBeInTheDocument();
    });
});
