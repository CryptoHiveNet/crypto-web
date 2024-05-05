import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';

describe('Breadcrumb component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        ariaLabel: 'breadcrumb',
        testId: 'test-breadcrumb',
        onClick: onClickMock,
    };
    const mockChildren = (
        <BreadcrumbItem href="#test">{test_children_text}</BreadcrumbItem>
    );
    const { getByTestId, getByText } = render(
        <Breadcrumb {...mockProps}>{mockChildren}</Breadcrumb>,
    );
    it('should render Breadcrumb component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-breadcrumb')).toBeInTheDocument();
        });
    });

    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-breadcrumb'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        waitFor(() => {
            expect(getByText(test_children_text)).toBeInTheDocument();
        });
    });
});
