import { fireEvent, render, screen } from '@testing-library/react';
import Alert from './Alert';
import '@testing-library/jest-dom';
import { HiEye } from 'react-icons/hi';

it('should render the alert with default props', () => {
  render(<Alert>This is an alert message.</Alert>);
  // Assert presence of alert container
  expect(screen.getByRole('alert')).toBeInTheDocument();
});

it('should render the alert with custom props', () => {
  const customId = 'my-alert';
  const customColor = 'warning';
  const customIcon = HiEye;

  render(
    <Alert id={customId} color={customColor} alertIcon={customIcon}>
      Custom alert content.
    </Alert>
  );

  // Assert presence and custom ID
  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(screen.getByRole('alert')).toHaveAttribute('id', customId);

  // Assert custom color class
  expect(screen.getByRole('alert')).toHaveClass(
    'text-yellow-700 bg-yellow-100 border-yellow-500'
  );

  // Assert custom icon
  expect(screen.getByTestId('flowbite-alert-icon')).toBeInTheDocument();
});

// it('should hide the alert when the dismiss button is clicked', () => {
//   render(<Alert>This alert should be hidden on click.</Alert>);

//   // Find the dismiss button
//   const dismissButton = screen.getByRole('button', { name: /close/i });

//   // Simulate clicking the dismiss button
//   fireEvent.click(dismissButton);

//   // Assert absence of the alert
//   expect(screen.queryByRole('alert')).not.toBeInTheDocument();
// });

it('should render additional content if provided', () => {
  const additionalContent = <p>This is some additional information.</p>;

  render(
    <Alert additionalContent={additionalContent}>
      This is an alert with additional content.
    </Alert>
  );

  // Assert presence of additional content
  expect(
    screen.getByText(/This is some additional information/i)
  ).toBeInTheDocument();
});
