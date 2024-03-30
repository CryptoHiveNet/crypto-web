import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

it('renders children correctly', () => {
  const { getByText } = render(<Button>Hello</Button>);
  expect(getByText('Hello')).toBeInTheDocument();
});

it('executes onClick handler when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(getByText('Click Me'));
  expect(handleClick).toHaveBeenCalled();
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
    </Button>
  );
  expect(getByTestId('spinner')).toBeInTheDocument();
});
