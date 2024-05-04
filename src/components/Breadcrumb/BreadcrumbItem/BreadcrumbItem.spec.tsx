import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import BreadcrumbItem from './BreadcrumbItem';

describe('BreadcrumbItem component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        href: '#home',
        testId: 'test-breadcrumb-item',
        onClick: onClickMock,
    };
    const { getByTestId, getByText } = render(
        <BreadcrumbItem {...mockProps}>{test_children_text}</BreadcrumbItem>,
    );
    it('should render BreadcrumbItem component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-breadcrumb-item')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-breadcrumb-item'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        waitFor(() => {
            expect(getByText(test_children_text)).toBeInTheDocument();
        });
    });
});
