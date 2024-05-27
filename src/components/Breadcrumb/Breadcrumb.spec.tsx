import { fireEvent, render, screen } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    ariaLabel: 'breadcrumb',
    className: 'test-class',
    testId: 'test-breadcrumb',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

const mockChildren = (
    <BreadcrumbItem href="#test">Test Children</BreadcrumbItem>
);

describe('Breadcrumb component unit tests', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });
    it('should render Breadcrumb component with required props', () => {
        render(<Breadcrumb {...mockProps}>{mockChildren}</Breadcrumb>);
        const breadcrumbComponent = screen.getByTestId('test-breadcrumb');

        expect(breadcrumbComponent).toBeInTheDocument();
        expect(breadcrumbComponent).toHaveAttribute('id', 'test-id');
        expect(breadcrumbComponent).toHaveAttribute('aria-label', 'breadcrumb');
        expect(breadcrumbComponent).toHaveClass('test-class');
    });

    it('should handle onClick event', () => {
        render(<Breadcrumb {...mockProps}>{mockChildren}</Breadcrumb>);
        const breadcrumbComponent = screen.getByTestId('test-breadcrumb');
        fireEvent.click(breadcrumbComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Breadcrumb {...mockProps}>{mockChildren}</Breadcrumb>);
        const breadcrumbComponent = screen.getByTestId('test-breadcrumb');
        fireEvent.mouseEnter(breadcrumbComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Breadcrumb {...mockProps}>{mockChildren}</Breadcrumb>);
        const breadcrumbComponent = screen.getByTestId('test-breadcrumb');
        fireEvent.mouseLeave(breadcrumbComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<Breadcrumb {...mockProps}>{mockChildren}</Breadcrumb>);
        expect(screen.getByText('Test Children')).toBeInTheDocument();
    });
});
