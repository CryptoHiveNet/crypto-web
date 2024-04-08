import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

it('renders children correctly', () => {
  const { getByText } = render(<Button>Hello</Button>);
  expect(getByText('Hello')).toBeInTheDocument();
});

it('executes onClick handler when clicked', async () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(getByText('Click Me'));
  fireEvent.click(getByText('Click Me'));
  await waitFor(() => {
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
      isProcessing
      processingSpinner={<div data-testid='spinner'>Spinner</div>}
    >
      Submit
    </Button>,
  );
  expect(getByTestId('spinner')).toBeInTheDocument();
});

it('should call onMouseEnter when mouse enters', async () => {
  const onMouseEnterMock = jest.fn();
  const { getByTestId } = render(
    <Button testId='my-button' onMouseEnter={onMouseEnterMock}>
      Hoverable Button
    </Button>,
  );
  const buttonComponent = getByTestId('my-button');
  fireEvent.mouseEnter(buttonComponent);
  await waitFor(() => {
    expect(onMouseEnterMock).toHaveBeenCalled();
  });
});

it('should call onMouseLeave when mouse leaves', async () => {
  const onMouseLeaveMock = jest.fn();
  const { getByTestId } = render(
    <Button testId='my-button' onMouseLeave={onMouseLeaveMock}>
      Hoverable button
    </Button>,
  );
  const buttonComponent = getByTestId('my-button');
  fireEvent.mouseLeave(buttonComponent);
  await waitFor(() => {
    expect(onMouseLeaveMock).toHaveBeenCalled();
  });
});
