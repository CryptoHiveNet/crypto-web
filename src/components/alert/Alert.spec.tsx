import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Alert from './Alert';
import '@testing-library/jest-dom';
import { HiEye } from 'react-icons/hi';

it('should render the alert with default props and message', () => {
  render(<Alert testId='my-alert'>This is an alert message.</Alert>);
  const alertComponent = screen.getByTestId('my-alert');
  expect(alertComponent).toHaveTextContent('This is an alert message.');
});
it('renders with the provided testId prop', () => {
  const testId = 'test-alert';
  const { getByTestId } = render(<Alert testId={testId}>Test Alert</Alert>);
  const alertElement = getByTestId(testId);
  expect(alertElement).toBeInTheDocument();
});
it('should render the alert with custom props', () => {
  const customId = 'my-alert';
  const customColor = 'warning';
  const customIcon = HiEye;

  render(
    <Alert id={customId} color={customColor} icon={customIcon}>
      Custom alert content.
    </Alert>,
  );
  const alert = screen.getByRole('alert');
  expect(alert).toBeInTheDocument();
  expect(alert).toHaveAttribute('id', customId);
  expect(alert).toHaveClass('text-yellow-700 bg-yellow-100 border-yellow-500');
  expect(screen.getByTestId('flowbite-alert-icon')).toBeInTheDocument();
});

it('should render the close button and close the alert when clicked', async () => {
  const { queryByText, getByLabelText } = render(
    <Alert>
      <span>Alert message</span>
    </Alert>,
  );
  expect(queryByText('Alert message')).toBeInTheDocument();
  const closeButton = getByLabelText('Dismiss');
  fireEvent.click(closeButton);
  await waitFor(() => {
    expect(queryByText('Alert message')).not.toBeInTheDocument();
  });
});

it('renders additional content correctly', () => {
  const AdditionalContent = () => <div>Additional Content</div>;
  render(<Alert additionalContent={<AdditionalContent />}>Hello</Alert>);
  expect(screen.getByText('Additional Content')).toBeInTheDocument();
});

it('calls onDismiss function when dismiss button is clicked', () => {
  const onDismissMock = jest.fn();
  const { getByLabelText } = render(
    <Alert onDismiss={onDismissMock} testId='alert-dismiss-button'>
      Hello
    </Alert>,
  );
  const closeButton = getByLabelText('Dismiss');
  fireEvent.click(closeButton);
  expect(onDismissMock).toHaveBeenCalledTimes(1);
});
