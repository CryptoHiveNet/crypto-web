import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb component', () => {
  it('should render Breadcrumb component with required props', () => {
    const mockProps = {
      id: 'test-id',
      ariaLabel: 'breadcrumb',
      testId: 'test-breadcrumb',
    };
    const { getByTestId } = render(<Breadcrumb {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-breadcrumb')).toBeInTheDocument();
    });
  });

  it('should handle onClick event', () => {
    // Arrange
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<Breadcrumb {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-breadcrumb'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = (
      <FlowbiteBreadcrumb.Item href='#home'>Home</FlowbiteBreadcrumb.Item>
    );
    const { getByText } = render(<Breadcrumb>{mockChildren}</Breadcrumb>);
    waitFor(() => {
      expect(getByText('Home')).toBeInTheDocument();
    });
  });
});
