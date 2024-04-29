import { fireEvent, render, waitFor } from '@testing-library/react';

import BreadcrumbItem from './BreadcrumbItem';

describe('BreadcrumbItem component', () => {
  it('should render BreadcrumbItem component with required props', () => {
    const mockProps = {
      id: 'test-id',
      href: '#home',
      testId: 'test-breadcrumb-item',
    };
    const { getByTestId } = render(
      <BreadcrumbItem {...mockProps}>Home</BreadcrumbItem>,
    );
    waitFor(() => {
      expect(getByTestId('test-breadcrumb-item')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(
      <BreadcrumbItem {...mockProps}>Home</BreadcrumbItem>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-breadcrumb-item'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = 'Home';
    const { getByText } = render(
      <BreadcrumbItem href='#home'>{mockChildren}</BreadcrumbItem>,
    );
    waitFor(() => {
      expect(getByText('Home')).toBeInTheDocument();
    });
  });
});
