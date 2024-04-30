import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Button from './Button';

describe('Button component tests', () => {
  const handleClick = jest.fn();
  const onMouseLeaveMock = jest.fn();
  const onMouseEnterMock = jest.fn();
  const props = {
    testId: 'my-button',
    onClick: handleClick,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
  };

  const { getByTestId, getByText } = render(
    <Button {...props}>{test_children_text}</Button>,
  );
  it('renders children correctly', () => {
    expect(getByText(test_children_text)).toBeInTheDocument();
  });

  it('executes onClick handler when clicked', () => {
    waitFor(() => {
      fireEvent.click(getByText(test_children_text));
      fireEvent.click(getByText(test_children_text));
      expect(handleClick).toHaveBeenCalledTimes(2);
    });
  });

  it('renders as disabled when disabled prop is true', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    expect(container.firstChild).toBeDisabled();
  });

  it('renders a processing spinner when isProcessing prop is true', () => {
    const { getByTestId } = render(
      <Button
        isProcessing={true}
        processingSpinner={<div data-testid='spinner'>Spinner</div>}
      >
        Submit
      </Button>,
    );
    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  it('should call onMouseEnter when mouse enters', () => {
    waitFor(() => {
      const buttonComponent = getByTestId('my-button');
      fireEvent.mouseEnter(buttonComponent);
      expect(onMouseEnterMock).toHaveBeenCalled();
    });
  });

  it('should call onMouseLeave when mouse leaves', () => {
    waitFor(() => {
      const buttonComponent = getByTestId('my-button');
      fireEvent.mouseLeave(buttonComponent);
      expect(onMouseLeaveMock).toHaveBeenCalled();
    });
  });
});
